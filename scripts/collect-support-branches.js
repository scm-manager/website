const { organization } = require("./config");
const parse = require("parse-link-header");

const supportBranchRegex = /^support\/([1-9]+\.[1-9]+[0-9]*\.x)$/g;

/**
 * @param {Octokit} api
 * @param {string} repository
 * @returns {Promise<Array<{range: string, sha: string}>>}
 */
async function collectSupportBranches(api, repository) {
  const supportBranches = [];
  const branchItr = asyncBranchItr(api, repository);

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
};

/**
 * @param {Octokit} api
 * @param {string} repository
 * @returns {{[Symbol.asyncIterator](): {next: function(): Promise<{result: any, done}>, page: number}}|{next: (function(): {result: *, done: boolean}), page: number}}
 */
function asyncBranchItr(api, repository) {
  return {
    [Symbol.asyncIterator]() {
      return {
        page: 0,
        done: false,
        async next() {
          if (this.done) {
            return { done: true };
          }
          const response = await api.repos.listBranches({
            owner: organization,
            repo: repository,
            page: this.page++,
          });
          const links = parse(response.headers.link);
          this.done = !links || !links.next;
          return {
            done: false,
            value: response.data,
          };
        },
      };
    },
  };
}

exports.collectSupportBranches = collectSupportBranches;
