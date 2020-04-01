/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// resolve src for mdx
// https://github.com/ChristopherBiscardi/gatsby-mdx/issues/176#issuecomment-429569578
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

const createPluginPage = (node) => {
  return {
    path: node.fields.slug,
    component: path.resolve(`./src/templates/plugin.tsx`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      slug: node.fields.slug,
      name: node.frontmatter.name,
    },
  };
};

const createDocPage = (node) => {
  return {
    path: node.fields.slug,
    component: path.resolve(`./src/templates/doc.tsx`),
    context: {
      slug: node.fields.slug,
    },
  };
};

const createPost = (node) => {
  return {
    path: `/blog${node.fields.slug}`,
    component: path.resolve(`./src/templates/post.tsx`),
    context: {
      slug: node.fields.slug,
    },
  };
};

const createBlogCategory = (category) => {
  return {
    path: `/blog/categories/${category}`,
    component: path.resolve(`./src/templates/posts-category.tsx`),
    context: {
      category
    },
  }
};

const createBlogAuthor = (author) => {
  return {
    path: `/blog/authors/${author}`,
    component: path.resolve(`./src/templates/posts-author.tsx`),
    context: {
      author
    },
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allCategoriesYaml {
        nodes {
          name
        }
      }
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              name
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      categories: allMarkdownRemark(
        filter: { fields: { slug: { glob: "/posts/**" } } }
      ) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
      authors: allMarkdownRemark(
        filter: { fields: { slug: { glob: "/posts/**" } } }
      ) {
        group(field: frontmatter___author) {
          fieldValue
        }
      }
    }
  `).then(result => {
    const edges = [
      ...result.data.allMarkdownRemark.edges,
      ...result.data.allMdx.edges,
    ];

    edges.forEach(({ node }) => {
      if (node.fields.slug.startsWith("/plugins")) {
        createPage(createPluginPage(node));
      } else if (node.fields.slug.startsWith("/docs")) {
        createPage(createDocPage(node));
      } else if (node.fields.slug.startsWith("/posts")) {
        createPage(createPost(node));
      }
    });

    result.data.allCategoriesYaml.nodes.forEach(node => {
      createPage({
        path: `/plugins/categories/${node.name}`,
        component: path.resolve(`./src/templates/category.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          name: node.name,
        },
      });
    });

    result.data.categories.group.forEach(category => {
      createPage(createBlogCategory(category.fieldValue));
    });
    result.data.authors.group.forEach(author => {
      createPage(createBlogAuthor(author.fieldValue));
    });
  });
};
