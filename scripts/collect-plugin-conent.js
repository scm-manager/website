const { Octokit } = require("@octokit/rest");
const { collectVersions } = require("./collect-versions");
const { collectContent } = require("./collect-content");
const { core } = require("./config");
const { join } = require("path");

/**
 * @param {Octokit} api
 * @param {string} plugin-r
 */
async function collectPluginContent(api, plugin) {
  const now = Date.now();
  const outPath = join(__dirname, "..", "content", "docs");
  const versions = await collectVersions(api, core)
  await collectContent(api, core, versions, outPath);
  return Date.now() - now;
}

if (require.main === module) {
  collectPluginContent(new Octokit())
    .then(timeMs => console.log(`Collected core content in ${timeMs / 1000} seconds.`))
    .catch(console.error);
} else {
  exports.collectCoreContent = collectPluginContent;
}
