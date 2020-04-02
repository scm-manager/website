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
    siteUrl: `https://scm-manager.org`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
        icon: `src/images/scm-manager_logo_img.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`],
            },
          },
        ],
      },
    },
    `gatsby-transformer-yaml`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
