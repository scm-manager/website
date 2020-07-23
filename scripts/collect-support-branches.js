const { organization } = require("./config");

const supportBranchRegex = /^support\/(.*)$/;


/**
 * @param {Octokit} api
 * @param {string} repository
 * @returns {Promise<Array<{range: string, sha: string}>>}
 */
async function collectSupportBranches(api, repository) {
  const supportBranches = [];

  for await (const branches of api.paginate.iterator(api.repos.listBranches, {
    owner: organization,
    repo: repository,
  })) {
    for (const branch of branches.data) {
      const name = branch.name;
      const regexResult = supportBranchRegex.exec(name);
      if (regexResult) {
        const [_matched, range] = regexResult;
        const branchResult = {
          range,
          sha: branch.commit.sha,
        };
        supportBranches.push(branchResult);
      }
    }
  }

  return supportBranches;
}

exports.collectSupportBranches = collectSupportBranches;
