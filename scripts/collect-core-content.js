const { collectVersions } = require("./collect-versions");
const { collectRepositoryContent } = require("./collect-repository-content");
const { core } = require("./config");
const { join } = require("path");

/**
 * @returns Promise<number>
 */
async function collectCoreContent() {
  const now = Date.now();
  const outPath = join(__dirname, "..", "content");
  const versions = await collectVersions("scm-manager", "scm-manager");
  await collectRepositoryContent("scm-manager", "scm-manager", versions, outPath);
  return Date.now() - now;
}

exports.collectCoreContent = collectCoreContent;
