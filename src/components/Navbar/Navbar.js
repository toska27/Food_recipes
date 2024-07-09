import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Ako se skrola na dole
      setShowNavbar(false);
    } else {
      // Ako se skrola na gore
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`navbar ${showNavbar ? "active" : "hidden"}`}>
      <img src={Logo} className="logo" alt="Logo" />
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
