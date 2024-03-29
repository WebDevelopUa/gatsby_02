import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Job from "../components/Job";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Seo from "../components/Seo";

export const query = graphql`
  {
    allStrapiProjectsSections(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
   image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
        stack {
          id
          title
        }
      }
    }
    
     allStrapiBlogSections(sort: {fields: date, order: DESC}) {
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

export default function Home({ data }) {
  const pageTitle = `Homepage`;
  const {
    allStrapiProjectsSections: { nodes: projects },
    allStrapiBlogSections: { nodes: blogs }
  } = data;

  return <Layout>
    <Seo title={pageTitle} />
    <Hero />
    <Services />
    <Job />
    <Projects projects={projects} title="featured projects section" showLink />
    <Blogs blogs={blogs} title="blog section" showLink />
  </Layout>;
}
