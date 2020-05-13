const { Octokit } = require("@octokit/rest");
const { collectVersions } = require("./collect-versions");
const { collectRepositoryContent } = require("./collect-repository-content");
const { join } = require("path");

/**
 * @param {Octokit} api
 * @param {string} plugin
 * @returns Promise<number>
 */
async function collectPluginContent(api, plugin) {
  const now = Date.now();
  const outPath = join(__dirname, "..", "content", "plugins", plugin);
  const versions = await collectVersions(api, plugin);
  await collectRepositoryContent(api, plugin, versions, outPath);
  return Date.now() - now;
}

exports.collectPluginContent = collectPluginContent;
