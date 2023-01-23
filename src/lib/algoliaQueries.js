const pagePath = `content\/docs`;
const indexName = `Pages`;

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${pagePath}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
          language
          version
        }
        excerpt(pruneLength: 5000)
        internal {
          contentDigest
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: fields.slug,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
