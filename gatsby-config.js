const config = require('./content/meta/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `parts`,
        path: `${__dirname}/content/parts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-plugin-catch-links`,
  ],
};
