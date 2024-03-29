/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const compareVersions = require("semver/functions/compare");
const minVersion = require("semver/ranges/min-version");
const versionRangeComparator = require("./src/lib/versionRangeComparator");
const {
  createSocialSharingCard,
  renderSocialSharingCards,
} = require("./src/lib/socialSharingCards");

// resolve src for mdx
// https://github.com/ChristopherBiscardi/gatsby-mdx/issues/176#issuecomment-429569578
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.onCreateNode = async ({ node, getNode, actions }) => {
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
    } else if (slug.startsWith("/cli")) {
      const parts = slug.split("/");
      const cli = parts[1];
      createNodeField({
        node,
        name: `cli`,
        value: cli,
      });
      if (parts.length > 3 && parts[2] === "docs") {
        createNodeField({
          node,
          name: `version`,
          value: parts[3],
        });
        createNodeField({
          node,
          name: `language`,
          value: parts[4],
        });
        createNodeField({
          node,
          name: `installation`,
          value: parts[5],
        });
        createNodeField({
          node,
          name: `os`,
          value: parts[6],
        });
      }
    } else if (slug.startsWith("/plugins")) {
      const parts = slug.split("/");
      const plugin = parts[2];
      createNodeField({
        node,
        name: `plugin`,
        value: plugin,
      });
      if (parts.length > 4 && parts[3] === "docs") {
        createNodeField({
          node,
          name: `version`,
          value: parts[4],
        });
        createNodeField({
          node,
          name: `language`,
          value: parts[5],
        });
      }
    }
  } else if (node.internal.type === `NavigationYaml`) {
    const slug = createFilePath({ node, getNode });
    const parts = slug.split("/").filter(p => p.length > 0);

    const docsIndex = parts.indexOf("docs");
    if (docsIndex >= 0 && parts.length >= docsIndex + 2) {
      createNodeField({
        node,
        name: "version",
        value: parts[docsIndex + 1],
      });
      createNodeField({
        node,
        name: "language",
        value: parts[docsIndex + 2],
      });
    }

    const pluginsIndex = parts.indexOf("plugins");
    if (pluginsIndex >= 0 && parts.length >= pluginsIndex + 1) {
      createNodeField({
        node,
        name: "plugin",
        value: parts[pluginsIndex + 1],
      });
    }

    // remove navigation part
    parts.pop();
    createNodeField({
      node,
      name: `slug`,
      value: "/" + parts.join("/") + "/",
    });
  } else if (node.internal.type === `AlertsYaml`) {
    const path = createFilePath({ node, getNode });

    if (path.split("/").length > 4) {
      const plugin = path.split("/")[2];
      createNodeField({
        node,
        name: `component`,
        value: plugin,
      });
    } else {
      createNodeField({
        node,
        name: `component`,
        value: `core`,
      });
    }
  } else if (
    node.internal.type === `Changelog` ||
    node.internal.type === "PlainText"
  ) {
    const slug = createFilePath({ node, getNode, basePath: `plugins` });
    const plugin = slug.split("/")[1];
    createNodeField({
      node,
      name: `plugin`,
      value: plugin,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
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

const createPluginDocPage = (
  node,
  pluginDocPath,
  latestPageVersion,
  latestVersion
) => {
  const slugParts = node.fields.slug.split("/").filter(p => p.length > 0);
  // e.g.: /plugins/scm-review-plugin/docs/2.0.x/en/tasks
  const name = slugParts[1];
  const version = slugParts[3];
  const language = slugParts[4];

  const canonicalVersion =
    latestPageVersion === latestVersion ? "latest" : latestPageVersion;
  const canonicalPath = `/plugins/${name}/docs/${canonicalVersion}/${language}/${node.fields.slug
    .split("/")
    .slice(6)
    .join("/")}`;
  const latestRootPath = `/plugins/${name}/docs/${latestVersion}/${language}/`;

  return {
    path: pluginDocPath ? pluginDocPath : node.fields.slug,
    component: path.resolve(`./src/templates/plugin-docs.tsx`),
    context: {
      name,
      slug: node.fields.slug,
      version,
      latestVersion,
      latestPageVersion,
      language,
      canonicalPath,
      latestRootPath,
    },
  };
};

const createPluginLicensePage = node => {
  return {
    path: `/plugins/${node.name}/license`,
    component: path.resolve(`./src/templates/plugin-license.tsx`),
    context: {
      name: node.name,
    },
  };
};

const createCliInstallationPage = (node, latestVersion) => {
  const slugParts = node.fields.slug.split("/").filter(p => p.length > 0);
  // e.g.: /cli/docs/0.1.x/en/installation/darwin/
  const name = slugParts[5];
  const version = slugParts[2];
  const language = slugParts[3];

  const canonicalPath = `/cli/docs/${latestVersion}/${language}/installation/${name ||
    ""}`;
  const latestRootPath = `/cli/docs/${latestVersion}/${language}/installation/`;

  return {
    path: node.fields.slug,
    component: path.resolve(`./src/templates/cli-install.tsx`),
    context: {
      name,
      slug: node.fields.slug,
      version,
      latestVersion,
      latestPageVersion: latestVersion,
      language,
      canonicalPath,
      latestRootPath,
    },
  };
};

const createDocPage = (node, docPath, latestPageVersion, latestVersion) => {
  const slugParts = node.fields.slug.split("/");
  // array start with an empty string
  slugParts.shift();
  // followed by docs
  slugParts.shift();
  const version = slugParts.shift();
  const language = slugParts.shift();

  const canonicalVersion =
    latestPageVersion === latestVersion ? "latest" : latestPageVersion;
  const canonicalPath = `/docs/${canonicalVersion}/${language}/${node.fields.slug
    .split("/")
    .slice(4)
    .join("/")}`;
  const latestRootPath = `/docs/${latestVersion}/${language}/`;

  return {
    path: docPath ? docPath : node.fields.slug,
    component: path.resolve(`./src/templates/doc.tsx`),
    context: {
      slug: node.fields.slug,
      version,
      latestVersion,
      latestPageVersion,
      language,
      relativePath: "/" + slugParts.join("/"),
      canonicalPath,
      latestRootPath,
    },
  };
};

const createLatestDocPage = node => {
  const slugParts = node.fields.slug.split("/");
  // array start with an empty string
  slugParts.shift();
  // followed by docs
  slugParts.shift();
  // followed by version
  const version = slugParts.shift();
  return createDocPage(
    node,
    ["", "docs", "latest", ...slugParts].join("/"),
    version,
    version
  );
};

const createLatestPluginDocPage = node => {
  const slugParts = node.fields.slug.split("/");
  // array start with an empty string
  slugParts.shift();
  // followed by plugins
  slugParts.shift();
  // followed by name
  const name = slugParts.shift();
  // followed by docs
  slugParts.shift();
  // followed by version
  const version = slugParts.shift();
  return createPluginDocPage(
    node,
    ["", "plugins", name, "docs", "latest", ...slugParts].join("/"),
    version,
    version
  );
};

const createPost = (node, socialSharingCard) => {
  return {
    path: `/blog${node.fields.slug}`,
    component: path.resolve(`./src/templates/post.tsx`),
    context: {
      slug: node.fields.slug,
      socialSharingCard,
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
          documentation {
            version
            languages
          }
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
        group(field: frontmatter___author___id) {
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
            frontmatter {
              title
              categories
              date(formatString: "YYYY-MM-DD HH:mm")
              author {
                id
                avatar
              }
              featuredImage {
                relativePath
              }
            }
            timeToRead
            wordCount {
              words
            }
          }
        }
      }

      languages: file(relativePath: { eq: "languages.yml" }) {
        childrenLanguagesYaml {
          label
          value
        }
      }

      allVersions: allMarkdownRemark {
        nodes {
          fields {
            plugin
            slug
            version
          }
        }
      }

      versions: allMarkdownRemark(
        filter: { fields: { plugin: { eq: null }, version: { ne: null } } }
      ) {
        nodes {
          fields {
            slug
            version
          }
        }
      }

      coreReleases: allReleasesYaml(
        filter: { plugin: { eq: null }, type: { ne: "cli" } }
        sort: { fields: [date], order: DESC }
      ) {
        nodes {
          tag
        }
      }
      cliReleases: allReleasesYaml(
        filter: { plugin: { eq: null }, type: { eq: "cli" } }
        sort: { fields: [date], order: DESC }
      ) {
        nodes {
          tag
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

    const slugVersions = result.data.allVersions.nodes.map(n => n.fields);
    const docsVersions = result.data.versions.nodes.map(n => n.fields);
    const latestVersion = docsVersions
      .map(slugVersion => slugVersion.version)
      .sort(versionRangeComparator)[0];

    createRedirect({
      fromPath: "/docs/",
      toPath: `/docs/latest/${defaultLanguage}/`,
      isPermanent: true,
      redirectInBrowser: true,
    });

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const nodeSlug = node.fields.slug;
      const nodeSlugParts = nodeSlug.split("/");
      if (nodeSlug.startsWith("/docs")) {
        const pageVersion = nodeSlugParts[2];
        const getPagePath = p =>
          p
            .split("/")
            .slice(3)
            .join("/");
        const pagePath = nodeSlugParts.slice(3).join("/");
        const docsSlugVersions = docsVersions.filter(
          slugVersion =>
            getPagePath(slugVersion.slug) === pagePath && !!slugVersion.version
        );
        const latestPageVersion = docsSlugVersions
          .map(slugVersion => slugVersion.version)
          .sort(versionRangeComparator)[0];

        createPage(createDocPage(node, null, latestPageVersion, latestVersion));
        if (latestVersion === pageVersion) {
          createPage(createLatestDocPage(node));
        }
      } else if (nodeSlug.startsWith("/cli") && nodeSlugParts[2] === "docs") {
        const getPagePath = p =>
          p
            .split("/")
            .slice(6)
            .join("/");
        const pagePath = nodeSlugParts.slice(6).join("/");
        const cliVersions = result.data.versions.nodes
          .filter(n => n.fields.slug.startsWith("/cli"))
          .map(n => n.fields);
        const cliSlugVersions = cliVersions.filter(
          slugVersion =>
            getPagePath(slugVersion.slug) === pagePath && !!slugVersion.version
        );
        const latestCliVersion = cliSlugVersions
          .map(slugVersion => slugVersion.version)
          .sort(versionRangeComparator)[0];
        createPage(createCliInstallationPage(node, latestCliVersion));
      } else if (
        nodeSlug.startsWith("/plugins") &&
        nodeSlugParts[3] === "docs"
      ) {
        const getPagePath = p =>
          p
            .split("/")
            .slice(5)
            .join("/");
        const pluginName = nodeSlugParts[2];
        const pagePath = nodeSlugParts.slice(5).join("/");
        const pluginSlugVersions = slugVersions.filter(
          slugVersion =>
            slugVersion.plugin === pluginName &&
            getPagePath(slugVersion.slug) === pagePath
        );
        const latestPageVersion = pluginSlugVersions
          .map(slugVersion => slugVersion.version)
          .sort(versionRangeComparator)[0];
        const latestPluginVersion = slugVersions
          .filter(
            slugVersion =>
              slugVersion.plugin === pluginName && !!slugVersion.version
          )
          .map(slugVersion => slugVersion.version)
          .sort(versionRangeComparator)[0];
        const pluginVersion = nodeSlugParts[4];
        createPage(
          createPluginDocPage(
            node,
            null,
            latestPageVersion,
            latestPluginVersion
          )
        );
        if (latestPluginVersion === pluginVersion) {
          createPage(createLatestPluginDocPage(node));
        }
      }
    });

    result.data.allPluginYaml.nodes.forEach(node => {
      createPage(createPluginPage(node));
      createPage(createPluginInstallationPage(node));
      createPage(createPluginReleasesPage(node));
      createPage(createPluginLicensePage(node));

      const doc = node.documentation;
      if (doc && doc.length > 0) {
        createRedirect({
          fromPath: `/plugins/${node.name}/docs`,
          toPath: `/plugins/${node.name}/docs/latest/${defaultLanguage}/`,
          isPermanent: true,
          redirectInBrowser: true,
        });
      } else {
        createPage({
          path: `/plugins/${node.name}/docs`,
          component: path.resolve(`./src/templates/plugin-no-docs.tsx`),
          context: {
            name: node.name,
          },
        });
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

    const lastCoreRelease = result.data.coreReleases.nodes
      .map(node => node.tag)
      // remove rc releases
      .filter(tag => !tag.includes("-"))
      .sort(versionRangeComparator)[0];

    createPage({
      path: `/download`,
      component: path.resolve("./src/templates/download.tsx"),
      context: {
        tag: lastCoreRelease,
        latest: true,
      },
    });

    createPage({
      path: "/control-your-source-code-management",
      component: path.resolve(`./src/components/landingpages/control-your-source-code-management.tsx`),
    });

    result.data.coreReleases.nodes
      .map(node => node.tag)
      .forEach(tag => {
        createPage({
          path: `/download/${tag}`,
          component: path.resolve("./src/templates/download.tsx"),
          context: {
            tag,
            latest: tag === lastCoreRelease,
          },
        });
      });

    const lastCliRelease = result.data.cliReleases.nodes
      .map(node => node.tag)
      // remove rc releases
      .filter(tag => !tag.includes("-"))
      .sort(versionRangeComparator)[0];

    createPage({
      path: `/cli`,
      component: path.resolve("./src/templates/cli.tsx"),
      context: {
        tag: lastCliRelease,
        latest: true,
      },
    });

    result.data.cliReleases.nodes
      .map(node => node.tag)
      .forEach(tag => {
        createPage({
          path: `/cli/${tag}`,
          component: path.resolve("./src/templates/cli.tsx"),
          context: {
            tag,
            latest: tag === lastCliRelease,
          },
        });
      });

    const socialSharingCards = [];
    posts.forEach(({ node: post }) => {
      let socialSharingCard;

      if (
        !post.frontmatter.featuredImage &&
        isSocialSharingCardGenerationEnabled()
      ) {
        const card = createSocialSharingCard(post);
        socialSharingCards.push(card);
        socialSharingCard = {
          width: card.width,
          height: card.height,
          src: "/" + card.path,
        };
      }

      createPage(createPost(post, socialSharingCard));
    });

    return renderSocialSharingCards(socialSharingCards);
  });
};

const isSocialSharingCardGenerationEnabled = () => {
  return (
    process.env.NODE_ENV === "production" ||
    process.env.GENERATE_SOCIAL_SHARING_CARDS === "true"
  );
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type NavigationYaml implements Node @infer {
      entries: [MarkdownRemark]
    }

    type Documentation {
      version: String!
      languages: [String]!
    }

    type PluginYaml implements Node @infer {
      category: CategoriesYaml!
      documentation: [Documentation]
    }
    
    type NavigationYamlFields @infer {
      plugin: String
    }
  `;

  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers, reporter }) => {
  const resolvers = {
    PluginYaml: {
      category: {
        resolve(source, args, context) {
          let node = context.nodeModel
            .getAllNodes({ type: "CategoriesYaml" })
            .find(node => node.name === source.category);
          if (!node) {
            reporter.error(`could not find category for ${source.category}`);
          }
          return node;
        },
      },
      documentation: {
        type: ["Documentation!"],
        resolve(source, args, context) {
          // we use getAllNodes instead of runQuery,
          // because we get an error from runQuery
          return context.nodeModel
            .getAllNodes({ type: "MarkdownRemark" })
            .filter(node => {
              const fields = node.fields;
              return (
                fields.plugin === source.name && fields.slug.includes("docs")
              );
            })
            .map(node => {
              const { language, version } = node.fields;
              return {
                language,
                version,
              };
            })
            .reduce((acc, node) => {
              const doc = acc.find(d => d.version === node.version);
              if (doc) {
                if (!doc.languages.includes(node.language)) {
                  doc.languages.push(node.language);
                }
              } else {
                acc.push({
                  version: node.version,
                  languages: [node.language],
                });
              }
              return acc;
            }, [])
            .sort((a, b) => {
              return (
                compareVersions(minVersion(a.version), minVersion(b.version)) *
                -1
              );
            });
        },
      },
    },
    NavigationYaml: {
      entries: {
        resolve(source, args, context) {
          return source.entries.map(entry => {
            let path = entry;
            if (entry.startsWith("/")) {
              path = entry.substring(1);
            }
            const entrySlug = source.fields.slug + path;
            let node = context.nodeModel
              .getAllNodes({ type: "MarkdownRemark" })
              .find(node => node.fields.slug === entrySlug);
            if (!node) {
              reporter.error(
                `could not find navigation entry for ${entrySlug}`
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
  if (page.path === "/blog/404/") {
    const oldPage = { ...page };
    page.matchPath = `/blog/*`;
    deletePage(oldPage);
    createPage(page);
  }
  if (page.path === "/docs/404/") {
    const oldPage = { ...page };
    page.matchPath = `/docs/*`;
    deletePage(oldPage);
    createPage(page);
  }
};
