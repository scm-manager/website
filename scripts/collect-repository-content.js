'use strict';

const { ensureDir, emptyDir, mkdtemp, remove, move, pathExists, readdir, stat } = require('fs-extra');
const {spawn} = require('child_process');
const { join } = require('path');
const { tmpdir } = require('os');
const logger = require("./logger");

/**
 * @param {string} namespace
 * @param {string} repository
 * @param {Array<{range: string, sha: string}>} versions
 * @param {string} outPath
 *
 * @see https://stackoverflow.com/a/52269934
 */
async function collectRepositoryContent(namespace, repository, versions, outPath) {
  if (!versions.length) {
    logger.info(`Skipping ${repository}: no versions found`)
    return;
  }
  logger.info(`Collecting ${repository} (${versions.map(v => v.range).join(', ')}) ...`);

  const tmpClonePath = await mkdtemp(join(tmpdir(), `${repository}-`));
  const docsPath = join(outPath, "docs");

  try {
    logger.debug(`Cloning ${repository} into ${tmpClonePath} ...`);

    const cloneUrl = createCloneURL(namespace, repository);
    const git = createGit(tmpClonePath);

    await git(`clone`, `--no-checkout`, cloneUrl, `.`);
    await git(`sparse-checkout`, `set`, `--cone`, `docs/`, `README.md`, `LICENSE.txt`, `CHANGELOG.md`);
    await git(`reset`, `--hard`, `HEAD`);

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

function createGit(workingPath) {
  return (...args) => {
    logger.trace(`calling 'git'`);
    return new Promise((resolve, reject) => {
      const child = spawn("git", args, {cwd: workingPath});
      
      let stderr = "";

      child.stderr.on('data', data => {
        stderr += data;
      });

      child.on('exit', rc => {
        if (rc === 0) {
          resolve();
        } else {
          if (stderr) {
            logger.error(stderr);
          }
          reject(new Error(`process ends with ${rc}`))
        }
      })
    })
  }
}

function createCloneURL(namespace, repository) {
  return `https://ecosystem.cloudogu.com/scm/repo/${namespace}/${repository}`;
}

async function collectVersionContent(tmpDir, version, sha, outPath) {
  logger.debug(`Checking out ${version} (${sha}) ...`)
  const git = createGit(tmpDir);
  await git(`checkout`, `-f`, sha);

  const versionPath = join(outPath, version);
  const docsPath = join(tmpDir, 'docs');

  if (await pathExists(docsPath)) {
    logger.debug(`Collecting contents of docs folder for version ${version} ...`);
    await ensureDir(versionPath);
    await emptyDir(versionPath);

    logger.debug(`Move content from ${docsPath} to ${versionPath} ...`);
    await moveDirContents(versionPath, docsPath);
  } else {
    logger.debug(`No docs folder in version ${version}, skipping ...`)
  }
  logger.debug(`Content collected for ${version} and moved to ${outPath}`);
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
