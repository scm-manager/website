const { organization } = require("./config");
const semver = require("semver");

const semverRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/g;

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
