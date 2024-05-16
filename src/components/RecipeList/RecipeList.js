import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import "./RecipeList.css";

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <div className="recipeList">
      <h3 className="recipe_for">Recipe Lists for {searchedQuery}</h3>
      <div className="gridRecipes">
        {recipes.map((recipe) => (
          <RecipeListItem id={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
