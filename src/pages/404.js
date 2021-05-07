import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/SEO";

const Error = () => {
  const pageTitle = `404`;
  const pageDescription = `Error page`;

  return <Layout>
    <SEO title={pageTitle} description={pageDescription} />
    <main className="error-page">
      <div className="error-container">
        <h1>{pageTitle}</h1>
        <h2>{pageDescription}</h2>
        <br />
        <br />
        <Link to={`/`} className="btn">
          back home
        </Link>
      </div>
    </main>
  </Layout>;
};

export default Error;
