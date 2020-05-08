'use strict';

const { ensureDir, emptyDir } = require('fs-extra');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * @param {Octokit} api
 * @param {string} repository
 * @param {string} sha
 * @param {string} outPath
 *
 * @see https://stackoverflow.com/a/52269934
 */
async function collectContent(api, repository, sha, outPath) {
  await ensureDir(outPath);
  await exec(`git clone \\
  --depth 1 \\
  --filter=combine:blob:none+tree:0 \\
  --no-checkout \\
  "file://" \\
  local_repo`, {
    cwd: outPath
  });
  await exec(`git checkout ${sha} -- docs/`, {
    cwd: outPath
  });
}

exports.collectContent = collectContent;
