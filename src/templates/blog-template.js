import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import SEO from "../components/SEO";

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogSections(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const { content, title, description } = data.blog;

  return <Layout>
    <SEO title={title} description={description} />
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown children={content} />
          <Link to={`/blog`} className="btn center-btn">blog</Link>
        </article>
      </div>
    </section>
  </Layout>;
};

export default BlogTemplate;
