import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  {
    file(relativePath: {eq: "hero.png"}) {
      childImageSharp {
       gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

const Hero = () => {
  const { file: { childImageSharp: { gatsbyImageData } } } = useStaticQuery(query);
  const image = getImage(gatsbyImageData);

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline" />
          <h1>Hi there</h1>
          <h4>Gatsby v3 pet-project with Strapi</h4>
          <Link to={`/contact`} className="btn">Contact us</Link>
          <SocialLinks />
        </div>
      </article>
      <GatsbyImage
        image={image}
        alt="Hero image"
        className="hero-img"
      />
    </div>
  </header>;
};

export default Hero;
