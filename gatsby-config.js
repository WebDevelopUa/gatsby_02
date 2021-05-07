/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Seo data
  siteMetadata: {
    title: "Simple Gatsby 3 Website + Strapi Backend",
    description: "Simple pet-project generated using gatsby-starter-hello-world starter & Strapi Backend & Formspree contact form service",
    author: "@xxx",
    twitterUsername: "@xxx",
    image: "/twitter-img.png",
    siteUrl: "https://gatsby-v3-strapi-frontend.netlify.app"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        singleTypes: [`About-page`],
        contentTypes: [`Job-sections`, `Projects-sections`, `Blog-sections`]
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"]
            },
            { family: "Open Sans" }
          ]
        }
      }
    }
  ]
};
