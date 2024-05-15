import React from "react";
import "./RecipeListItem.css";

const RecipeListItem = ({ recipe, id }) => {
  return (
    <div className="recipeListItem" key={id}>
      <img src={recipe.image_url} alt="photo" />
      <h2>{recipe.title}</h2>
      <h4>{recipe.publisher}</h4>
      <div className="btns">
        <a href={recipe.source_url} className="btn_url">
          Recipe URL
        </a>
      </div>
    </div>
  );
};

export default RecipeListItem;
