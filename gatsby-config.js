const _ = require("lodash");
const path = require("path");

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

const rssEntryQuery = `
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

const rssEntrySerializer = ({ query: { site, allMarkdownRemark } }) => {
  return allMarkdownRemark.edges.map(edge => {
    return Object.assign({}, edge.node.frontmatter, {
      description: edge.node.excerpt,
      date: edge.node.frontmatter.date,
      url: site.siteMetadata.siteUrl + edge.node.fields.slug,
      guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
      custom_elements: [{ "content:encoded": edge.node.html }],
    })
  })
};


module.exports = {
  siteMetadata: {
    title: `SCM-Manager`,
    description: `The easiest way to share and manage your Git, Mercurial and Subversion repositories.`,
    author: `@ssdorra`,
    keywords: ['scm', 'git', 'svn', 'mercurial'],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SCM-Manager`,
        short_name: `scm-manager`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#33b2e8`,
        display: `minimal-ui`,
        icon: `content/images/scm-manager_logo_img.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-external-links`,
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
            return _.upperFirst(_.camelCase(`${node.name} Yaml`))          
          } else {
            // plugins/scm-branchwp-plugin/releases/2-0-0-rc4.yaml
            return _.upperFirst(_.camelCase(`${path.basename(node.dir)} Yaml`))
          }
        },
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: rssMetadataQuery,
        feeds: [
          {
            serialize: rssEntrySerializer,
            query: rssEntryQuery,
            output: "/rss.xml",
            title: "SCM-Manager RSS Feed",
          },
        ],
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        ignore: ['src/styles/prism.scss', 'fontawesome-svg-core/styles.css'],
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: ['img', 'image-list', 'content', 'gatsby-resp-image-wrapper'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    , {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: 3,
        matomoUrl: 'https://cloudogu.matomo.cloud',
        siteUrl: 'https://scm-manager.org/',
        disableCookies: true
      }
    }
  ]
};
