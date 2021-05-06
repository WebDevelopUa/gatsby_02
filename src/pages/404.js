import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/SEO";

const Error = () => <Layout>
  <main className="error-page">
    <div className="error-container">
      <h1>404</h1>
      <h2>Error page</h2>
      <br />
      <br />
      <Link to={`/`} className="btn">
        back home
      </Link>
    </div>
  </main>
</Layout>;

export default Error;
