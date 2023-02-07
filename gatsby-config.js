const _ = require("lodash");
const path = require("path");

require("dotenv").config();

// We use graceful-fs to avoid "Error: EMFILE: too many open files" errors. Especially because on Windows one cannot
// increase the open files limit as a workaround.
// See also: https://github.com/gatsbyjs/gatsby/issues/12011
const fs = require("fs");
const gracefulFs = require("graceful-fs");
gracefulFs.gracefulify(fs);

const rssMetadataQuery = `
{
  site {
    siteMetadata {
      title
      description
      siteUrl
      site_url: siteUrl
    }
  }
}
`;

const rssBlogQuery = `
{
  allMarkdownRemark(
    filter: { fields: { slug: { glob: "/posts/**" } } },
    sort: { order: DESC, fields: [frontmatter___date] },
  ) {
    edges {
      node {
        excerpt
        html
        fields { slug }
        frontmatter {
          title
          date
        }
      }
    }
  }
}
`;

const rssReleaseQuery = `
{
  releases: allReleasesYaml(
    filter: { plugin: { eq: null } }
    sort: { fields: [date], order: DESC }
  ) {
    nodes {
      tag
      date
      packages {
        type
      }
    }
  }
  changelogs: file(relativePath: { eq: "CHANGELOG.md" }) {
    childChangelog {
      versions {
        tag
        changes {
          html
        }
      }
    }
  }
}
`;

const rssBlogSerializer = ({ query: { site, allMarkdownRemark } }) => {
  return allMarkdownRemark.edges.map(edge => {
    const url = `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`;
    return Object.assign({}, edge.node.frontmatter, {
      description: edge.node.excerpt,
      date: edge.node.frontmatter.date,
      url,
      guid: url,
      custom_elements: [{ "content:encoded": edge.node.html }],
    });
  });
};

const rssReleaseSerializer = ({ query: { site, releases, changelogs } }) => {
  return releases.nodes.map(release => {
    let description;
    const changelog = changelogs.childChangelog.versions.find(
      version => version.tag === release.tag
    );
    if (changelog) {
      description = changelog.changes.html;
    }

    const url = `${site.siteMetadata.siteUrl}/download/${release.tag}`;

    return {
      title: release.tag,
      description,
      date: release.date,
      url,
      guid: url,
    };
  });
};

console.log("process.env", process.env);

module.exports = {
  siteMetadata: {
    title: `SCM-Manager`,
    description: `The easiest way to share and manage your Git, Mercurial and Subversion repositories.`,
    author: `@cloudogu`,
    keywords: ["scm", "git", "svn", "mercurial"],
    siteUrl: process.env.SITE_URL || `https://scm-manager.org`,
  },
  plugins: [
    `gatsby-transformer-plaintext`,
    `gatsby-transformer-keepachangelog`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SCM-Manager`,
        short_name: `scm-manager`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#33b2e8`,
        display: `minimal-ui`,
        icon: `content/images/scm_manager_logo_favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node, object, isArray }) => {
          if (isArray || node.name === "plugin") {
            // array:
            // docs/languages.yml
            // plugins/categories.yaml
            // docs/2.0.x/en/navigation.yml
            // plugins/scm-review-plugin/docs/2.1.x/en/navigation.yml

            // plugin
            // plugins/scm-webhook-plugin/plugin.yml
            return _.upperFirst(_.camelCase(`${node.name} Yaml`));
          } else {
            // plugins/scm-branchwp-plugin/releases/2-0-0-rc4.yaml
            return _.upperFirst(_.camelCase(`${path.basename(node.dir)} Yaml`));
          }
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-plantuml-lite`,
            options: {
              imageType: `svg`,
              codeBlockLang: `uml`,
            },
          },
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-medium-zoom`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`],
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: rssMetadataQuery,
        feeds: [
          {
            title: "SCM-Manager Blog Feed",
            query: rssBlogQuery,
            serialize: rssBlogSerializer,
            output: "/rss.xml",
          },
          {
            title: "SCM-Manager Release Feed",
            query: rssReleaseQuery,
            serialize: rssReleaseSerializer,
            output: "/download/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        ignore: ["src/styles/prism.scss", "fontawesome-svg-core/styles.css"],
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: [
          "img",
          "image-list",
          "content",
          "gatsby-resp-image-wrapper",
        ], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/lib/algoliaQueries"),
        dryRun: process.env.ALGOLIA_DRY_RUN === "true",
      },
    },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
};
