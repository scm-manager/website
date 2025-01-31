const logger = require("./logger");
const { listBranches } = require("./scmapi");

const supportBranchRegex = /^support\/(.*)$/;


/**
 * @param {string} namespace
 * @param {string} repository
 * @returns {Promise<Array<{range: string, sha: string}>>}
 */
async function collectSupportBranches(namespace, repository) {
  const supportBranches = [];

  try {
    for (const branch of await listBranches(namespace, repository)) {
      const name = branch.name;
      const regexResult = supportBranchRegex.exec(name);
      if (regexResult) {
        const [_matched, range] = regexResult;
        const branchResult = {
          range,
          sha: branch.sha,
        };
        supportBranches.push(branchResult);
      }
    }
  } catch (e) {
    if (e instanceof Error && 'status' in e && e.status === 404) {
      logger.warn(`Ignore content because ${repository} could not be found`);
    } else {
      throw e;
    }
  }

  return supportBranches;
}

exports.collectSupportBranches = collectSupportBranches;
