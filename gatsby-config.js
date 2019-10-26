module.exports = {
  siteMetadata: {
    title: `SCM-Manager Plugin Center`,
    description: `Find the right plugin for your SCM-Manager instance`,
    author: `@ssdorra`,
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
        name: `SCM-Manager Plugin Center`,
        short_name: `scm-manager pc`,
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
              linkImagesToOriginal: false
            },
          },
          `gatsby-remark-images-medium-zoom`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-transformer-yaml`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
