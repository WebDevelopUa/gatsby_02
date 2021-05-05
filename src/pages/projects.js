import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";

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

const ProjectsPage = ({ data: { allStrapiProjectsSections: { nodes: projects } } }) =>
  <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
  </Layout>;

export default ProjectsPage;
