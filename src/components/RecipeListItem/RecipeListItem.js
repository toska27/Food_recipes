import React from "react";
import "./RecipeListItem.css";

const RecipeListItem = ({ recipe, key }) => {
  return (
    <div className="recipeListItem">
      <h2>{recipe.title}</h2>
      <h4>{recipe.publisher}</h4>
    </div>
  );
};

export default RecipeListItem;
