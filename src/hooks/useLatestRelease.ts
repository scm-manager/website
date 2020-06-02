import { useStaticQuery, graphql } from "gatsby";

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
        limit: 1
      ) {
        nodes {
          tag
        }
      }
    }
  `);

  const tag = data.releases.nodes[0].tag;
  const tagParts = tag.split(".");
  const defaultLanguage = data.languages.childrenLanguagesYaml[0].value;

  return {
    tag,
    docs: `/docs/${tagParts[0]}.${tagParts[1]}.x/${defaultLanguage}/`,
  };
};

export default useLatestRelease;
