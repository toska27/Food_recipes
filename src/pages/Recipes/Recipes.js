import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import RecipeList from "../../components/RecipeList/RecipeList";
import { API_URL } from "../../constants/constants";
import "./Recipes.css";

const Recipes = () => {
  const [searchedQuery, setSearchedQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(`${API_URL}/search?q=${searchedQuery}`);
        const data = await response.json();
        if (data && data.recipes) {
          setRecipes(data.recipes);
        }
        setRecipes(data.recipes);
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };
    getRecipes();
  }, [searchedQuery]);

  return (
    <div className="recipes">
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </div>
  );
};

export default Recipes;
