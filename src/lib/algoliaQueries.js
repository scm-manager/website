const lodash = require("lodash");
const semver = require("semver");

const pagePath = `docs`;
const DEFAULT_INDEX_NAME = `Pages`;

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
          plugin
        }
        excerpt(pruneLength: 5000)
        internal {
          contentDigest
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({
  node: {
    id,
    frontmatter,
    fields: { semverVersion, ...fields },
    ...rest
  },
}) {
  return {
    objectID: fields.slug,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

function filterToLatest(edges) {
  edges.forEach(
    edge =>
      (edge.node.fields.semverVersion = semver.coerce(edge.node.fields.version))
  );
  const grouped = lodash.groupBy(edges, "node.fields.plugin");
  const mapped = lodash.mapValues(grouped, items =>
    items.filter(
      item =>
        !items.some(
          other =>
            other.node.fields.semverVersion !==
              item.node.fields.semverVersion &&
            semver.gt(
              other.node.fields.semverVersion,
              item.node.fields.semverVersion
            )
        )
    )
  );
  return lodash.flatten(Object.values(mapped));
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) =>
      filterToLatest(data.pages.edges).map(pageToAlgoliaRecord),
    indexName: process.env.GATSBY_ALGOLIA_INDEX || DEFAULT_INDEX_NAME,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
