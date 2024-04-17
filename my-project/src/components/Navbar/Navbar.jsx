import React from "react";
import { useState } from "react";

import logo from '../../assets/Images/logo.jpg'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ handleAboutClick , handleourTeamClick}) => {
  const [Mobile, setMobile] = useState(false);

  return (
    <div className="container">
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about" onClick={handleAboutClick}>
            About
          </a>
        </li>
        <li>
        <Link to="/Features" >Features</Link>
        </li>
        
        <li>
            <a href="#Ourteam" onClick={handleourTeamClick}>Ourteam</a>
          </li>
        <Link to="/Login" className="nav-buttons">Log in</Link>
          <Link to="/Signup" className="nav-buttons">Sign Up</Link>
     

        {/* Other navigation links */}
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
    </div>
  );
};

export default Navbar;
