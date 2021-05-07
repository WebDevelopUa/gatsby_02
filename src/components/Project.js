import React from "react";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const Project = ({ description, title, url, github, stack, image, index }) => {
  const imageData = getImage(image);

  return <article className="project">
    {image && <GatsbyImage className="project-img" image={imageData} alt={title} />}
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h3>{title || `default project title`}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {stack.map(
          item => <span key={item.id}>{item.title}</span>
        )}
      </div>
      <div className="project-links">
        <a href={github}
           target="_blank"
           rel="noopener noreferrer nofollow">
          <FaGithubSquare className="project-icon" aria-label="GitHub" />
        </a>
        <a href={url}
           target="_blank"
           rel="noopener noreferrer nofollow">
          <FaShareSquare className="project-icon" aria-label="Share" />
        </a>
      </div>
    </div>
  </article>;
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Project;
