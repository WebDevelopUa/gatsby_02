import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const Blog = ({ id, title, image, date, category, slug, description }) => {
  const imageData = getImage(image);

  return <Link to={`/blogs/${slug}`} key={id} className="blog">
    <article>
      {image && <GatsbyImage alt={title} image={imageData} className="blog-img" />}
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  </Link>;
};

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default Blog;
