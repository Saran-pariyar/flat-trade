// import { React, useState } from "react";
// import "./navbar.css";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [showNavItems, setShowNavItems] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h1>Logo</h1>
//       </div>
//       <div className="right-nav">
//         <ul className={`nav-links ${showNavItems ? "showMenu" : ""}`}>
//           <li>
//             <NavLink className="nav-link" to="/home">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link" to="/explore">
//               Explore
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link" to="/about">
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link" to="/contact">
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div
//         className="ham-icon"
//         onClick={() =>
//           showNavItems ? setShowNavItems(false) : setShowNavItems(true)
//         }
//       >
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Logo</div>
        <div
          className="ham-icon"
          onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-list ${showMenu ? "showMenu" : ""}`}>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Explore
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
