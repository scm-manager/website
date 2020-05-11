const { Octokit } = require("@octokit/rest");
const { collectVersions } = require("./collect-versions");
const { collectContent } = require("./collect-content");
const { core } = require("./config");
const { join } = require("path");

/**
 * @param {Octokit} api
 */
async function collectCoreContent(api) {
  const now = Date.now();
  const outPath = join(__dirname, "..", "content", "docs");
  const versions = await collectVersions(api, core)
  await collectContent(api, core, versions, outPath);
  return Date.now() - now;
}

if (require.main === module) {
  collectCoreContent(new Octokit())
    .then(timeMs => console.log(`Collected core content in ${timeMs / 1000} seconds.`))
    .catch(console.error);
} else {
  exports.collectCoreContent = collectCoreContent;
}
