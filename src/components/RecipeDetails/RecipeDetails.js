import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants/constants";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await fetch(`${API_URL}/get?rId=${recipeId}`);
        const data = await response.json();
        if (data && data.recipe) {
          setRecipe(data.recipe);
        }
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };
    getRecipe();
  }, [recipeId]);

  return (
    <div className="recipeDetails">
      <div className="info1">
        <Link to="/recipes" className="btn_back">
          Back to recipe List
        </Link>
        <img src={recipe.image_url} alt="photo" className="recipe_img" />
      </div>
      <div className="info2">
        <h2 className="details_title">{recipe.title}</h2>
        <a href={recipe.source_url} className="btn_url">
          Recipe URL
        </a>
        <h2 className="ingredients">Ingredients</h2>

        {recipe &&
          recipe.ingredients &&
          recipe.ingredients.map((data) => (
            <h5 className="ingredient_desc">{data}</h5>
          ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
