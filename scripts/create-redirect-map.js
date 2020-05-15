const { readFile, writeFile } = require("fs-extra");
const { join, sep } = require("path");
const { forEachFileInDirectoryRecursive } = require("./foreach-file-in-directory-recursive");
const { EOL } = require("os");

const OUT_FILE = join(__dirname, "..", "deployment", "docker", "redirects.conf");
const SLUG_REGEX = /slug: (.+)/;
const FILE_NAME_WITHOUT_EXTENSION_REGEX = /^(.+)\.md$/

async function main() {
  const dir = join(__dirname, "..", "content", "posts");
  const resultMap = {
    "/feed/": "rss.xml"
  };
  await forEachFileInDirectoryRecursive(dir, path => read(dir, path, resultMap));
  const resultMapString = Object.entries(resultMap).reduce((result, [slug, redirectUrl], idx) => {
    if (idx !== 0) {
      result += EOL;
    }
    return result + `${slug} /${redirectUrl};`;
  }, "");
  await writeFile(OUT_FILE, resultMapString);
  return "Success";
}

/**
 * @param {Array<string>} path
 * @param result
 * @returns {Promise<void>}
 */
async function read(root, path, result) {
  const file = path.pop();
  const dir = path.pop();
  const filePath = join(root, ...path, dir, file);
  const fileNameWithoutExtensionResult = FILE_NAME_WITHOUT_EXTENSION_REGEX.exec(file);
  if (fileNameWithoutExtensionResult === null) {
    return;
  }
  const [_, fileNameWithoutExtension] = fileNameWithoutExtensionResult;
  let newUrl;
  if (fileNameWithoutExtension === "index") {
    newUrl = ["blog", "posts", ...path, dir].join("/");
  } else {
    newUrl = ["blog", "posts", ...path, dir, fileNameWithoutExtension].join("/");
  }
  const fileContent = await readFile(filePath);
  const regexResult = SLUG_REGEX.exec(fileContent);
  if (regexResult) {
    const [_, slug] = regexResult;
    result[slug] = newUrl;
  } else {
    console.warn(`Incorrect slug for: ${filePath}`);
  }
}

main();
