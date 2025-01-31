const logger = require("./logger");
const semver = require("semver");
const { listTags } = require("./scmapi");

/**
 * @param {string} namespace
 * @param {string} repository
 * @returns {Promise<Array<{version: string, sha: string}>>}
 */
async function collectReleases(namespace, repository) {
  const releases = [];

  try {
    for (const tag of await listTags(namespace, repository)) {
      if (semver.valid(tag.name)) {
        releases.push({
          version: tag.name,
          sha: tag.sha,
        });
      } else {
        logger.warn(`skipped non semver version ${tag.name} at ${repository}`);
      }
    }
  } catch (e) {
    if (e instanceof Error && 'status' in e && e.status === 404) {
      logger.warn(`Ignore content because ${repository} could not be found`);
    } else {
      throw e;
    }
  }


  return releases;
}

exports.collectReleases = collectReleases;
