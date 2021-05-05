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

const ComponentName = () => <Layout>
  <h2>blog post template page</h2>
</Layout>;

export default ComponentName;
