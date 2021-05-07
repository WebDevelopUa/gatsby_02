/**
 * About page was created using Strapi admin panel
 * http://localhost:1337/admin/plugins/content-manager/singleType/application::about-page.about-page
 * here we just fetch the data
 * need to change gatsby-config.js => resolve: `gatsby-source-strapi`, =>  singleTypes: [`About-page`],
 */

import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Title from "../components/Title";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  {
  about: allStrapiAboutPage {
      nodes {
        stack_item {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;


const About = ({ data: { about: { nodes } } }) => {
  const { stack_item, title, info, image } = nodes[0];
  const imageData = getImage(image);
  const alt = `Beautiful sunset`;

  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <GatsbyImage alt={alt} image={imageData} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack_item.map(item => <span key={item.id}>{item.title}</span>)}
          </div>
        </article>
      </div>
    </section>
  </Layout>;
};

export default About;
