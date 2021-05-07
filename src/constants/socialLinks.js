import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon" />,
    url: "https://www.fb.com"
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com"
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon" />,
    url: "https://dribbble.com"
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon" />,
    url: "https://www.behance.net"
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon" />,
    url: "https://www.twitter.com"
  }
];
const links = data.map(link => <li key={link.id}>
    <a href={link.url}
       className="social-link"
       target="_blank"
       rel="noopener noreferrer nofollow">
      {link.icon}
    </a>
  </li>
);


export default function socialLinks({ styleClass }) {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
}


