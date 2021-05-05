import React from "react";
// import PropTypes from "prop-types";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Project = ({ description, title, url, github, stack, image, index }) => {
  const imageData = getImage(image);

  return <article className="project">
    <GatsbyImage className="project-img" image={imageData} alt={title} />
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h3>{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {stack.map(
          item => <span key={item.id}>{item.title}</span>
        )}
      </div>
      <div className="project-links">
        <a href={github}><FaGithubSquare className="project-icon" /></a>
        <a href={url}><FaShareSquare className="project-icon" /></a>
      </div>
    </div>
  </article>;
};

// Project.propTypes = {};

export default Project;
