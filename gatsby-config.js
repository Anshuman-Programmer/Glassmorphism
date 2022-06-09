/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Glassmorphism',
    description:
      'Copy and paste this Glassmorphism CSS snippet into your frontend project for an amazing CSS glass effect.',
    siteUrl: 'https://glassmorphism-generator.netlify.app', // No trailing slash allowed!
    image: '/circle.svg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@anshutalukdar',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`
  ]
}
