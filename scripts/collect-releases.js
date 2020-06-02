const { organization } = require("./config");
const logger = require("./logger");
const semver = require("semver");

/**
 * @param {Octokit} api
 * @param {string} repository
 * @returns {Promise<Array<{version: string, sha: string}>>}
 */
async function collectReleases(api, repository) {
  const releases = [];

  for await (const tags of api.paginate.iterator(api.repos.listTags, {
    owner: organization,
    repo: repository,
  })) {
    for (const tag of tags.data) {
      if (semver.valid(tag.name)) {
        releases.push({
          version: tag.name,
          sha: tag.commit.sha,
        });
      } else {
        logger.warn(`skipped non semver version ${tag.name} at ${repository}`);
      }
    }
  }

  return releases;
}

exports.collectReleases = collectReleases;
