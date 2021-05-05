import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogSections(slug: { eq: $slug }) {
      content
    }
  }
`;

const ComponentName = ({ data }) => {
  const { content } = data.blog;

  return <Layout>
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          {content}
        </article>
      </div>
    </section>
  </Layout>;
};

export default ComponentName;
