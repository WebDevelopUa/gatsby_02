import React from "react";
import logo from "../assets/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";

const Navbar = ({ toggleSidebar }) =>
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button type="button" className="toggle-btn">
          <FaAlignRight onClick={toggleSidebar} />
        </button>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </nav>;

export default Navbar;
