import { useStaticQuery, graphql } from "gatsby";
import compareVersions from "semver/functions/compare";

const useLatestRelease = () => {
  const data = useStaticQuery(graphql`
    query {
      languages: file(relativePath: { eq: "languages.yml" }) {
        childrenLanguagesYaml {
          label
          value
        }
      }

      releases: allReleasesYaml(
        filter: { plugin: { eq: null } }
        sort: { fields: [date], order: DESC }
        limit: 10
      ) {
        nodes {
          tag
        }
      }
    }
  `);

  const tag = data.releases.nodes.map(node => node.tag)
    // remove rc releases
    .filter(tag => !tag.includes("-"))
    .map(tag => {
      // fix 1.x non semver tags
      if (tag.split(".").length === 2) {
        return `${tag}.0`;
      }
      return tag;
    })
    .sort(compareVersions)
    .reverse()[0];

  const tagParts = tag.split(".");
  const defaultLanguage = data.languages.childrenLanguagesYaml[0].value;

  return {
    tag,
    docs: `/docs/${tagParts[0]}.${tagParts[1]}.x/${defaultLanguage}/`,
  };
};

export default useLatestRelease;
