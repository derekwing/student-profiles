import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearchOnChange, searchType }) => {
  return (
    <input
      className="search-bar"
      placeholder={`Search by ${searchType}`}
      type="text"
      onChange={handleSearchOnChange}></input>
  );
};

export default SearchBar;
