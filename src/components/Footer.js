import React from "react";
import SocialLinks from "../constants/socialLinks";
import Layout from "./Layout";

const Footer = () =>
  <footer className="footer">
    <div>
      <SocialLinks styleClass={`footer-links`} />
      <h4>copyright&copy;{new Date().getFullYear()}</h4>
      <span>Gatsby v3</span> pet-project
    </div>
  </footer>;

export default Footer;
