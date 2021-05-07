import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const contact = () => {
  const pageTitle = `Contact`;
  const pageDescription = `Contact page`;

  return <Layout>
    <SEO title={pageTitle} description={pageDescription} />
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form action="https://formspree.io/f/mayaqojy" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="name" className="form-control" required />
            <input type="email" name="email" placeholder="email" className="form-control" required />
            <textarea name="message" placeholder="message" rows="5" className="form-control" required />
            <button type="submit" className="btn submit-btn">Submit</button>
          </div>
        </form>
      </article>
    </section>
  </Layout>;
};

export default contact;
