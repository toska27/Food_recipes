import React, { useState } from "react";
import "./Search.css";

const Search = ({ setSearchedQuery }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchedQuery(value);
    setValue("");
  };

  return (
    <div className="search">
      <h2>Lets explore the recipes</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="tomato,potato,pizza"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="input_search"
        />
        <button type="submit" className="btn_search">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
