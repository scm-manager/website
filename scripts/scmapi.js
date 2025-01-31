const axios = require("axios");
const logger = require("./logger");

const http = axios.create({
  baseURL: 'https://ecosystem.cloudogu.com/scm/api/v2/',
});

http.interceptors.request.use(request => {
  logger.debug('Starting Request', JSON.stringify(request, null, 2))
  return request
});

/**
 * @param {string} namespace
 * @param {string} repository
 * @returns {Promise<Array<{name: string, sha: string}>>}
 */
function listTags(namespace, repository) {
  return http.get(`repositories/${namespace}/${repository}/tags/`)
    .then(response => response.data)
    .then(data => data._embedded.tags.map(tag => (
      { name: tag.name, sha: tag.revision }
    )))
    .catch(error => {
      logger.error(error);
    });
}

/**
 * @param {string} namespace
 * @param {string} repository
 * @returns {Promise<Array<{name: string, sha: string}>>}
 */
function listBranches(namespace, repository) {
  return http.get(`repositories/${namespace}/${repository}/branches/`)
    .then(response => response.data)
    .then(data => data._embedded.branches.map(branch => (
      { name: branch.name, sha: branch.revision }
    )))
    .catch(error => {
      logger.error(error);
    });
}

exports.listTags = listTags;
exports.listBranches = listBranches;
