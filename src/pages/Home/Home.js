import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Find your Recipes</h1>
      <Link to="/recipes" className="btn_search">
        SEARCH RECIPES
      </Link>
    </div>
  );
};

export default Home;
