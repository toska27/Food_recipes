import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import "./RecipeList.css";

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <div className="recipeList">
      <h3>Recipe Lists for {searchedQuery}</h3>
      <div className="gridRecipes">
        {recipes.map((recipe) => (
          <RecipeListItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
