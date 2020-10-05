const { readFile, writeFile } = require("fs-extra");
const { join } = require("path");
const { forEachFileInDirectoryRecursive } = require("./foreach-file-in-directory-recursive");
const { EOL } = require("os");

const OUT_FILE = join(__dirname, "..", "deployment", "docker", "redirects.conf");
const SLUG_REGEX = /slug: (.+)/;
const FILE_NAME_WITHOUT_EXTENSION_REGEX = /^(.+)\.md$/;

const EXCLUDES = ['/plugins/scm-archive-plugin/'];

async function main() {
  const dir = join(__dirname, "..", "content", "posts");
  const resultMap = {
    "/feed/": "rss.xml",
    "/download-action/": "download/",
    "/news/": "blog/",
    "~^/news/page/([0-9]+).*$": "blog/$1/",
    "~^/category/scm-manager-2/page/([0-9]+)/?$": "blog/categories/scm-manager/$1/",
    "~^/category/scm-manager-2/?$": "blog/categories/scm-manager/",
    "~^/category/(.*)/page/([0-9]+)/?$": "blog/categories/$1/$2/",
    "~^/category/(.*)$": "blog/categories/$1",
    "~^/author/(.*)$": "blog/"
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
 * @param {string} root
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
    if (!EXCLUDES.includes(slug)) {
      result[slug] = newUrl;
    } else {
      console.warn(`skip slug ${slug}, because it is in the exclude list`);
    }
  } else {
    console.warn(`Incorrect slug for: ${filePath}`);
  }
}

main();
