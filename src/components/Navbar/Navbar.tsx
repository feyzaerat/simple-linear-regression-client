import React, { useState, useEffect } from "react";
import { HiOutlineUser } from "react-icons/hi2";

import { NavLink, Link, useLocation } from "react-router-dom"; 
import "./navbar.css";
import logo from "../../assets/fke-logo-light.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container w-100 justify-space-around">
        <div className="navbar__logo w-100 align-i-center  d-flex">
          <img src={logo} className="w64" alt="logo" />
          <span>Simple Linear Regression</span>
        </div>
        <nav
          className={`justify-space-evenly navbar__links ${isMenuOpen ? "active" : ""}`}
        >
         
          <NavLink 
            to="/"
            className={({ isActive }) => (isActive ? "bold text-active" : "")}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "bold text-active" : "")}
          >
            About Me
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "bold text-active" : "")}
          >
            Contact
          </NavLink>
        </nav>

        <div className="navbar__profile relative">
          <button
            className="navbar__profile-toggle borderless-btn middle-btn circle-btn light-btn"
            onClick={toggleProfileMenu}
          >
            <HiOutlineUser />

          </button>
          {isProfileMenuOpen && (
            <div className="navbar__profile-menu text-right absolute d-flex">
              <Link to="#profile">Profile</Link>
              <Link to="#settings">Settings</Link>
              <Link to="#logout">Exit</Link>
            </div>
          )}
        </div>

        <button className="navbar__toggle" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
