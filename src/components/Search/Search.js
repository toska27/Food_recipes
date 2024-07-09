import React, { useState, useEffect } from "react";
import { suggestions } from "../../constants/suggestions";
import "./Search.css";

const Search = ({ setSearchedQuery }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    if (inputValue.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);

      // Odlozi promenu pretrage za 1.5 sekundi
      const timer = setTimeout(() => {
        setSearchedQuery(inputValue);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setFilteredSuggestions([]);
    }
  }, [inputValue, setSearchedQuery]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setInputValue(query);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSearchedQuery(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div className="search">
      <h2>Let's explore the recipes</h2>
      <input
        type="search"
        value={inputValue}
        onChange={handleSearch}
        placeholder="Search recipes..."
        className="input_search"
      />
      {filteredSuggestions.length > 0 && (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
