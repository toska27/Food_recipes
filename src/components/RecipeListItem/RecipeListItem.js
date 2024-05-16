import React from "react";
import { Link } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import "./RecipeListItem.css";

const RecipeListItem = ({ recipe, id }) => {
  return (
    <div className="recipeListItem" key={id}>
      <img src={recipe.image_url} alt="photo" className="item_img" />
      <h2 className="item_title">{recipe.title}</h2>
      <h4 className="item_publ">{recipe.publisher}</h4>
      <div className="btns">
        <a href={recipe.source_url} className="btn">
          Recipe URL
        </a>
        <Link to={`/recipes/${recipe.recipe_id}/details`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeListItem;
