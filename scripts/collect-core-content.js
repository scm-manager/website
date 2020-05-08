const { Octokit } = require("@octokit/rest");
const { collectVersions } = require('./collect-versions');
const { collectContent } = require('./collect-content');
const { core } = require('./config');

/**
 * @param {Octokit} api
 * @param {{supportBranches: Array<{range: string, sha: string}>, releases: {version: string, sha: string}[]}} versions
 */
async function collectCoreContent(api) {
  const versions = await collectVersions(api, core);

}

if (require.main === module) {
  collectCoreContent(new Octokit())
    .then(console.log)
    .catch(console.error);
} else {
  exports.collectCoreContent = collectCoreContent;
}
