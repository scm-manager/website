const { Octokit } = require("@octokit/rest");
const { collectVersions } = require("./collect-versions");
const { collectRepositoryContent } = require("./collect-repository-content");
const { cli } = require("./config");
const { join } = require("path");

/**
 * @param {Octokit} api
 * @returns Promise<number>
 */
async function collectCliContent(api) {
  const now = Date.now();
  const outPath = join(__dirname, "..", "content", "cli");
  const versions = await collectVersions(api, cli);
  await collectRepositoryContent(api, cli, versions, outPath);
  return Date.now() - now;
}

exports.collectCliContent = collectCliContent;
