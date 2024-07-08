import React, { useState } from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import "./RecipeList.css";

const RecipeList = ({ recipes, searchedQuery }) => {
  const [count, setCount] = useState(6);

  const search = (recipes) => {
    return recipes.filter((recipe) => recipe.publisher);
  };

  let amount = parseInt(count);
  let newSearch = search(recipes).splice(0, amount);

  return (
    <div className="recipeList">
      <h3 className="recipe_for">Recipe Lists for {searchedQuery}</h3>
      <div className="gridRecipes">
        {newSearch.length > 0 ? (
          newSearch.map((recipe) => {
            return (
              <RecipeListItem key={recipe.id} id={recipe.id} recipe={recipe} />
            );
          })
        ) : (
          <h2 className="no_matches">No matches</h2>
        )}
      </div>
      <div className="btns_view">
        <button
          className={count <= newSearch.length ? "more_view" : "non_view"}
          onClick={() => setCount(count + 10)}
        >
          Show more
        </button>

        <button
          className={count > 10 ? "less_view" : "non_view"}
          onClick={() => setCount(count - 10)}
        >
          Show less
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
