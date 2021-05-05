import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogSections(slug: { eq: $slug }) {
      content
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const { content } = data.blog;

  return <Layout>
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
