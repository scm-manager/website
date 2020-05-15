const { pathExists, stat, readdir } = require("fs-extra");
const { join } = require("path");

async function forEachRecursive(root, callback, parallel = false, path = []) {
  const currentDir = join(root, ...path);
  if (!(await pathExists(currentDir))) {
    return;
  }
  const files = await readdir(currentDir);
  for (const file of files) {
    const filePath = join(currentDir, file);
    const fstat = await stat(filePath);
    if (fstat.isDirectory()) {
      if (parallel) {
        forEachRecursive(root, callback, parallel, [...path, file]);
      } else {
        await forEachRecursive(root, callback, parallel, [...path, file]);
      }
    } else if (fstat.isFile()) {
      if (parallel) {
        callback([...path, file]);
      } else {
        await callback([...path, file]);
      }
    }
  }
}

/**
 * @param {string} root
 * @param {function(path: Array<string>): any} callback
 * @param {boolean} parallel Whether the callback will be executed in blocking or non-blocking mode
 *
 * @returns {Promise<void>}
 */
function forEachFileInDirectoryRecursive(root, callback, parallel = false) {
  return forEachRecursive(root, callback, parallel);
}

exports.forEachFileInDirectoryRecursive = forEachFileInDirectoryRecursive;
