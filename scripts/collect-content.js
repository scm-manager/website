'use strict';

const { ensureDir, emptyDir, mkdtemp, remove, move, pathExists, readdir, stat } = require('fs-extra');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { organization } = require('./config');
const { join } = require('path');
const { tmpdir } = require('os');

/**
 * @param {Octokit} api
 * @param {string} repository
 * @param {{supportBranches: Array<{range: string, sha: string}>, releases: {version: string, sha: string}[]}} versions
 * @param {string} outPath
 *
 * @see https://stackoverflow.com/a/52269934
 */
async function collectContent(api, repository, { supportBranches, releases }, outPath) {
  console.info(`Collecting ${repository}`);

  const tmpClonePath = await mkdtemp(join(tmpdir(), `${repository}-`));

  try {
    console.debug(`Cloning ${repository} into ${tmpClonePath}`);
    await exec(`git clone --no-checkout git@github.com:${organization}/${repository}.git . && git sparse-checkout init && git sparse-checkout set docs/ README.md LICENSE.md CHANGELOG.md`, {
      cwd: tmpClonePath
    });

    console.log(`Collecting support branches for ${repository}`)
    for (const { range, sha } of supportBranches) {
      await collectVersionContent(tmpClonePath, range, sha, outPath);
    }

    console.log(`Collecting releases for ${repository}`)
    for (const { version, sha } of releases) {
      await collectVersionContent(tmpClonePath, version, sha, outPath);
    }
  } finally {
    console.debug(`Removing temporary working directory: ${tmpClonePath}`)
    await remove(tmpClonePath);
  }
}

async function collectVersionContent(tmpDir, version, sha, outPath) {
  const versionPath = join(outPath, version);
  await ensureDir(versionPath);
  await emptyDir(versionPath);

  console.log(`Checking out ${version} (${sha})`)
  await exec(`git checkout -f ${sha}`, {
    cwd: tmpDir
  });

  await Promise.all([
    moveFileIfExsists(tmpDir, versionPath, 'README.md'),
    moveFileIfExsists(tmpDir, versionPath, 'CHANGELOG.md'),
    moveFileIfExsists(tmpDir, versionPath, 'LICENSE.md'),
    moveDirContents(versionPath, join(tmpDir, 'docs')),
  ])
}

/**
 * @param {string} from
 * @param {string} to
 * @param {string} file
 * @returns {Promise<void>}
 */
function moveFileIfExsists(from, to, file) {
  return moveIfExsists(`${from}/${file}`, `${to}/${file}`)
}

/**
 * @param {string} from
 * @param {string} to
 * @returns {Promise<void>}
 */
async function moveIfExsists(from, to) {
  if (await pathExists(from)) {
    console.debug(`Moving '${from}' to '${to}'...`)
    await move(from, to)
    console.debug(`Moved '${from}' to '${to}'`)
  } else {
    console.debug(`Nothing to move, '${from}' does not exist`)
  }
}

/**
 * @param {string} to
 * @param {string} dirRoot
 * @param {string[]} path
 *
 * @returns {Promise<void>}
 */
async function moveDirContents(to, dirRoot, path = []) {
  const currentDir = join(dirRoot, ...path);
  const outDir = join(to, ...path);
  const files = await readdir(currentDir);
  await ensureDir(outDir);
  for (const file of files) {
    const filePath = join(currentDir, file);
    const fstat = await stat(filePath);
    if (fstat.isDirectory()) {
      await moveDirContents(to, dirRoot, [...path, file]);
    } else if (fstat.isFile()) {
      await moveFileIfExsists(currentDir, outDir, file);
    }
  }
}

exports.collectContent = collectContent;
