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

const SEO = ({ title, description }) => {
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

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />
      <meta name="siteUrl" content={siteUrl} />
      <meta name="twitterUsername" content={twitterUsername} />
    </Helmet>
  );
};

export default SEO;
