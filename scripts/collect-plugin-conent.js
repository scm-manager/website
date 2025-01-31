const { collectVersions } = require("./collect-versions");
const { collectRepositoryContent } = require("./collect-repository-content");
const { join } = require("path");

/**
 * @param {string} plugin
 * @returns Promise<number>
 */
async function collectPluginContent(plugin) {
  const now = Date.now();
  const outPath = join(__dirname, "..", "content", "plugins", plugin);
  const versions = await collectVersions("scm-manager-plugins", plugin);
  await collectRepositoryContent("scm-manager-plugins", plugin, versions, outPath);
  return Date.now() - now;
}

exports.collectPluginContent = collectPluginContent;
