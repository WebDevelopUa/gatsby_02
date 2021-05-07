import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";
import SEO from "../components/SEO";

export const query = graphql`
  {
    allStrapiBlogSections {
      nodes {
        slug
        description
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

const Blog = ({ data: { allStrapiBlogSections: { nodes: blogs } } }) => {
  const pageTitle = `Blog`;
  const pageDescription = `Blog page`;

  return <Layout>
    <SEO title={pageTitle} description={pageDescription} />
    <section className="blog-page">
      <Blogs blogs={blogs} title={`blog page`} />
    </section>
  </Layout>;
};

export default Blog;
