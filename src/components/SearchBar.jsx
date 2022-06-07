import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearchOnChange }) => {
  return (
    <input
      className="search-bar"
      placeholder="Search by name"
      type="text"
      onChange={handleSearchOnChange}></input>
  );
};

export default SearchBar;
