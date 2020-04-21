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
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    if (slug.startsWith("/docs")) {
      appendVersionAndLanguageFields(createNodeField, node, slug.substring(5));
    } else if (slug.startsWith("/plugins")) {
      const plugin = slug.split("/")[2];
      createNodeField({
        node,
        name: `plugin`,
        value: plugin,
      });
    }
  } else if (node.internal.type === `NavigationYaml`) {
    const slug = createFilePath({ node, getNode, basePath: `docs` });
    createNodeField({
      node,
      name: `slug`,
      value:
        "/docs" + slug.substring(0, slug.length - ("navigation".length + 1)),
    });
    appendVersionAndLanguageFields(createNodeField, node, slug);
  }
};

const appendVersionAndLanguageFields = (createNodeField, node, slug) => {
  const slugParts = slug.split("/");
  // array starts with an empty string
  slugParts.shift();
  createNodeField({
    node,
    name: `version`,
    value: slugParts.shift(),
  });
  createNodeField({
    node,
    name: `language`,
    value: slugParts.shift(),
  });
};

const createPluginPage = node => {
  return {
    path: `/plugins/${node.name}`,
    component: path.resolve(`./src/templates/plugin.tsx`),
    context: {
      name: node.name,
    },
  };
};

const createPluginInstallationPage = node => {
  return {
    path: `/plugins/${node.name}/install`,
    component: path.resolve(`./src/templates/plugin-install.tsx`),
    context: {
      name: node.name,
    },
  };
};

// TODO: render further variants depending on version called
const createPluginReleasesPage = node => {
  return {
    path: `/plugins/${node.name}/releases`,
    component: path.resolve(`./src/templates/plugin-releases.tsx`),
    context: {
      name: node.name,
    },
  };
};

// TODO: render plugin docs depending on version and language (including redirect to last version)

const createPluginLicensePage = node => {
  return {
    path: `/plugins/${node.name}/license`,
    component: path.resolve(`./src/templates/plugin-license.tsx`),
    context: {
      name: node.name,
    },
  };
};

const createDocPage = node => {
  const slugParts = node.fields.slug.split("/");
  // array start with an empty string
  slugParts.shift();
  // followed by docs
  slugParts.shift();
  const version = slugParts.shift();
  const language = slugParts.shift();
  return {
    path: node.fields.slug,
    component: path.resolve(`./src/templates/doc.tsx`),
    context: {
      slug: node.fields.slug,
      version,
      language,
      relativePath: "/" + slugParts.join("/"),
    },
  };
};

const createPost = node => {
  return {
    path: `/blog${node.fields.slug}`,
    component: path.resolve(`./src/templates/post.tsx`),
    context: {
      slug: node.fields.slug,
    },
  };
};

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
  return graphql(`
    {
      allCategoriesYaml {
        nodes {
          name
        }
      }

      allPluginYaml {
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
          }
        }
      }

      categories: allMarkdownRemark(
        filter: { fields: { slug: { glob: "/posts/**" } } }
      ) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }

      authors: allMarkdownRemark(
        filter: { fields: { slug: { glob: "/posts/**" } } }
      ) {
        group(field: frontmatter___author) {
          fieldValue
          totalCount
        }
      }

      posts: allMarkdownRemark(
        filter: { fields: { slug: { glob: "/posts/**" } } }
        sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      languages: file(relativePath: { eq: "docs/languages.yml" }) {
        childrenLanguagesYaml {
          label
          value
        }
      }

      versions: allMarkdownRemark {
        group(field: fields___version) {
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }

    const defaultLanguage =
      result.data.languages.childrenLanguagesYaml[0].value;
    const latestVersion = result.data.versions.group
      .map(g => g.fieldValue)
      .sort()
      .reverse()[0];

    createRedirect({
      fromPath: "/docs/",
      toPath: `/docs/${latestVersion}/${defaultLanguage}/`,
      isPermanent: true,
      redirectInBrowser: true,
    });

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.fields.slug.startsWith("/docs")) {
        createPage(createDocPage(node));
      } else if (node.fields.slug.startsWith("/posts")) {
        createPage(createPost(node));
      }
    });

    result.data.allPluginYaml.nodes.forEach(node => {
        createPage(createPluginPage(node));
        createPage(createPluginInstallationPage(node));
        createPage(createPluginReleasesPage(node));
        createPage(createPluginLicensePage(node));
      },
    );

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

    const postsPerPage = 10;

    result.data.categories.group.forEach(category => {
      const numPages = Math.ceil(category.totalCount / postsPerPage);
      Array.from({ length: category.totalCount }).forEach((_, i) => {
        let pagePath = `/blog/categories/${category.fieldValue}`;
        if (i > 0) {
          pagePath += "/" + (i + 1);
        }

        createPage({
          path: pagePath,
          component: path.resolve(`./src/templates/posts-category.tsx`),
          context: {
            category: category.fieldValue,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        });
      });
    });

    result.data.authors.group.forEach(author => {
      const numPages = Math.ceil(author.totalCount / postsPerPage);
      Array.from({ length: author.totalCount }).forEach((_, i) => {
        let pagePath = `/blog/authors/${author.fieldValue}`;
        if (i > 0) {
          pagePath += "/" + (i + 1);
        }

        createPage({
          path: pagePath,
          component: path.resolve(`./src/templates/posts-author.tsx`),
          context: {
            author: author.fieldValue,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        });
      });
    });

    const posts = result.data.posts.edges;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog.tsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type NavigationYaml implements Node @infer {
      entries: [MarkdownRemark]
    }
  `;

  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers, reporter }) => {
  const resolvers = {
    NavigationYaml: {
      entries: {
        resolve(source, args, context) {
          const base = `/docs/${source.fields.version}/${source.fields.language}`;
          return source.entries.map(entry => {
            const entrySlug = base + entry;
            let node = context.nodeModel
              .getAllNodes({ type: "MarkdownRemark" })
              .find(node => node.fields.slug === entrySlug);
            if (!node) {
              reporter.error(
                `could not find navigation entry for ${entrySlug}`,
              );
            }
            return node;
          });
        },
      },
    },
  };
  createResolvers(resolvers);
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  // Check if the page is a localized 404
  if (page.path === "/docs/404/") {
    const oldPage = { ...page };
    page.matchPath = `/docs/*`;
    deletePage(oldPage);
    createPage(page);
  }
};
