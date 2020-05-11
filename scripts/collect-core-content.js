const { Octokit } = require("@octokit/rest");
const { collectVersions } = require("./collect-versions");
const { collectRepositoryContent } = require("./collect-repository-content");
const { core } = require("./config");
const { join } = require("path");

/**
 * @param {Octokit} api
 * @returns Promise<number>
 */
async function collectCoreContent(api) {
  const now = Date.now();
  const outPath = join(__dirname, "..", "content");
  const versions = await collectVersions(api, core);
  await collectRepositoryContent(api, core, versions, outPath);
  return Date.now() - now;
}

exports.collectCoreContent = collectCoreContent;
