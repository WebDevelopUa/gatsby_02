import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Job from "../components/Job";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import { getImage } from "gatsby-plugin-image";

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
  }
`;

export default ({ data }) => {
  const { allStrapiProjectsSections: { nodes: projects } } = data;
  console.log(data);

  return <Layout>
    <Hero />
    <Services />
    <Job />
    <Projects projects={projects} title="featured projects section" showLink />
  </Layout>;
}
