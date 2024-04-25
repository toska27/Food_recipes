import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
      </nav>
    </div>
  );
};

export default Navbar;
