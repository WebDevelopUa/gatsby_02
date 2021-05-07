/**
 * required info in gatsby-config.js:
 *  siteMetadata: {title, description, image, twitterUsername, author, siteUrl}
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        author
        image
        siteDescription: description
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`;

const Seo = ({ title, description }) => {
  const {
    site: {
      siteMetadata: {
        author,
        image,
        siteDescription,
        siteUrl,
        siteTitle,
        twitterUsername
      }
    }
  } = useStaticQuery(query);

  return <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
    <meta name="description" content={description || siteDescription} />
    <meta name="author" content={author} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={title} />
    <meta name="twitter:creator" content={twitterUsername} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={siteDescription} />
    <meta property="og:image" content={`${siteUrl}${image}`} />
  </Helmet>;
};

export default Seo;
