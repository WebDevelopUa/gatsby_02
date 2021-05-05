import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Blog = ({ id, title, image, date, category, slug, description }) => {
  const imageData = getImage(image);

  return <Link to={`/blogs/${slug}`} key={id} className="blog">
    <article>
      <GatsbyImage alt={title} image={imageData} className="blog-img" />
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

export default Blog;
