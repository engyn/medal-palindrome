// eslint-disable-next-line @typescript-eslint/no-var-requires
const siteConfig = require('./src/config/site');

module.exports = {
  siteMetadata: {
    title: siteConfig.siteTitle,
    siteUrl: siteConfig.siteUrl,
    description: siteConfig.siteDescription,
    author: siteConfig.name,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: siteConfig.fonts,
    },
  ],
};
