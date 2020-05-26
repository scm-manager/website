const { organization } = require("./config");
const { asyncIterator } = require('./async-iterator');
const parse = require("parse-link-header");
const semver = require("semver");
const logger = require('./logger');

const semverRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/g;

/**
 * @param {Octokit} api
 * @param {string} repository
 * @returns {Promise<Array<{version: string, sha: string}>>}
 */
async function collectReleases(api, repository) {
  const releases = [];

  const tagsItr = asyncIterator(async page => {
    const response = await api.repos.listTags({
      owner: organization,
      repo: repository,
      page,
    });
    const links = parse(response.headers.link);
    const done = !links || !links.next;
    logger.info(links && links.next);
    return {
      done,
      value: response.data
    }
  });

  for await (const tags of tagsItr) {
    // logger.info(tags.map(t => t.name))
    for (const tag of tags) {
      const regexResult = semverRegex.exec(tag.name);
      if (regexResult) {
        const [matched] = regexResult;
        // Exclude tag versions below version 2.0.0
        if (semver.major(matched) >= 2) {
          releases.push({
            version: matched,
            sha: tag.commit.sha,
          });
        }
      }
    }
  }

  return releases;
}

exports.collectReleases = collectReleases;
