const { collectVersions } = require("./collect-versions");
const { collectRepositoryContent } = require("./collect-repository-content");
const { join } = require("path");

/**
 * @returns Promise<number>
 */
async function collectCliContent() {
  const now = Date.now();
  const outPath = join(__dirname, "..", "content", "cli");
  const versions = await collectVersions("scm-manager", "cli");
  await collectRepositoryContent("scm-manager", "cli", versions, outPath);
  return Date.now() - now;
}

exports.collectCliContent = collectCliContent;
