import { React, useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="right-nav">
        <ul className={`nav-links ${showNavItems ? "showMenu" : ""}`}>
          <li>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/explore">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className="ham-icon"
        onClick={() =>
          showNavItems ? setShowNavItems(false) : setShowNavItems(true)
        }
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
