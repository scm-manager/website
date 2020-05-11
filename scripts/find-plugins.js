const { readdir, stat } = require("fs-extra");
const { join } = require("path");

/**
 * @returns {Promise<string[]>}
 */
async function findPlugins() {
  const dir = join(__dirname, '..', 'content', 'plugins')
  const files = await readdir(dir);
  const result = [];
  await Promise.all(files.map(async file => {
    const fstat = await stat(join(dir, file));
    if (fstat.isDirectory()) {
      result.push(file);
    }
  }));
  return result;
}

exports.findPlugins = findPlugins;
