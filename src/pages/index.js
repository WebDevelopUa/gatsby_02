import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Job from "../components/Job";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";

export default () =>
  <Layout>
    <Hero />
    <Services />
    <Job />
  </Layout>;
