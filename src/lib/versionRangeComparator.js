// we use javascript, require and module.exports instead of import and export,
// because this file is used from node (gatsby-node) and browser.

const minVersion = require("semver/ranges/min-version");
const compare = require("semver/functions/compare");

const createSemVer = version => {
  let semVer = version;
  // fix 1.x non semver versions
  if (semVer.split(".").length === 2) {
    semVer += ".0";
  }
  return minVersion(semVer);
};

const versionRangeComparator = (a, b) => {
  return compare(createSemVer(a), createSemVer(b));
};

module.exports = versionRangeComparator;
