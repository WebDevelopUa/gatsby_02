import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import SEO from "../components/SEO";

export const query = graphql`
  {
    allStrapiProjectsSections {
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

const ProjectsPage = ({ data: { allStrapiProjectsSections: { nodes: projects } } }) => {
  const pageTitle = `Projects`;
  const pageDescription = `Projects page`;

  return <Layout>
    <SEO title={pageTitle} description={pageDescription} />
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
  </Layout>;
};

export default ProjectsPage;
