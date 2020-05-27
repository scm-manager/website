const { organization } = require("./config");
const { asyncIterator } = require('./async-iterator');
const parse = require("parse-link-header");

const supportBranchRegex = /^support\/([1-9]+\.[1-9]+[0-9]*\.x)$/g;

/**
 * @param {Octokit} api
 * @param {string} repository
 * @returns {Promise<Array<{range: string, sha: string}>>}
 */
async function collectSupportBranches(api, repository) {
  const supportBranches = [];
  const branchItr = asyncIterator(async page => {
    const response = await api.repos.listBranches({
      owner: organization,
      repo: repository,
      page: page + 1, // Because async iterator starts with page=0
    });
    const links = parse(response.headers.link);
    const done = !links || !links.next;
    return {
      done,
      value: response.data
    }
  });

  for await (const branches of branchItr) {
    for (const branch of branches) {
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
