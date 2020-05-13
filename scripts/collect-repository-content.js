'use strict';

const { ensureDir, emptyDir, mkdtemp, remove, move, pathExists, readdir, stat } = require('fs-extra');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { organization } = require('./config');
const { join } = require('path');
const { tmpdir } = require('os');
const logger = require("./logger");

/**
 * @param {Octokit} api
 * @param {string} repository
 * @param {Array<{range: string, sha: string}>} versions
 * @param {string} outPath
 *
 * @see https://stackoverflow.com/a/52269934
 */
async function collectRepositoryContent(api, repository, versions, outPath) {
  logger.info(`Collecting ${repository} ...`);

  const tmpClonePath = await mkdtemp(join(tmpdir(), `${repository}-`));
  const docsPath = join(outPath, "docs");

  try {
    logger.debug(`Cloning ${repository} into ${tmpClonePath} ...`);

    const cloneUrl = createCloneURL(repository);
    await exec(`git clone --no-checkout ${cloneUrl} . && git sparse-checkout init && git sparse-checkout set docs/ README.md LICENSE.txt CHANGELOG.md`, {
      cwd: tmpClonePath
    });

    logger.debug(`Collecting root files for ${repository} from default branch ...`);
    await Promise.all([
      moveFileIfExsists(tmpClonePath, outPath, 'README.md'),
      moveFileIfExsists(tmpClonePath, outPath, 'CHANGELOG.md'),
      moveFileIfExsists(tmpClonePath, outPath, 'LICENSE.txt'),
    ]);

    logger.debug(`Collecting versions for ${repository} ...`)
    for (const { range, sha } of versions) {
      await collectVersionContent(tmpClonePath, range, sha, docsPath);
    }
  } finally {
    logger.debug(`Removing temporary working directory: ${tmpClonePath} ...`)
    await remove(tmpClonePath);
  }
}

function createCloneURL(repository) {
  let auth = "";
  const apiToken = process.env.GITHUB_API_TOKEN;
  if (apiToken) {
    auth = apiToken + "@";
  }
  return `https://${auth}github.com/${organization}/${repository}`;
}

async function collectVersionContent(tmpDir, version, sha, outPath) {
  logger.debug(`Checking out ${version} (${sha}) ...`)
  await exec(`git checkout -f ${sha}`, {
    cwd: tmpDir
  });

  const versionPath = join(outPath, version);
  const docsPath = join(tmpDir, 'docs');

  if (await pathExists(docsPath)) {
    logger.debug(`Collecting contents of docs folder for version ${version} ...`);
    await ensureDir(versionPath);
    await emptyDir(versionPath);

    await moveDirContents(versionPath, docsPath);
  } else {
    logger.debug(`No docs folder in version ${version}, skipping ...`)
  }
}

/**
 * @param {string} from
 * @param {string} to
 * @param {string} file
 * @returns {Promise<void>}
 */
function moveFileIfExsists(from, to, file) {
  return moveIfExsists(join(from, file), join(to, file))
}

/**
 * @param {string} from
 * @param {string} to
 * @returns {Promise<void>}
 */
async function moveIfExsists(from, to) {
  if (await pathExists(from)) {
    logger.trace(`Moving '${from}' to '${to}' ...`)
    await move(from, to, {
      overwrite: true
    })
    logger.trace(`Moved '${from}' to '${to}'!`)
  } else {
    logger.warn(`Nothing to move, '${from}' does not exist!`)
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
  if (!(await pathExists(currentDir))) {
    return;
  }
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

exports.collectRepositoryContent = collectRepositoryContent;
