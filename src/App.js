import React, { useState, useEffect } from "react";
import "./App.css";
import StudentProfiles from "./components/StudentProfiles.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data from "./lib/data.js";

const App = () => {
  const [nameSearchTerm, setNameSearchTerm] = useState(null);
  const [tagSearchTerm, setTagSearchTerm] = useState(null);

  const handleNameSearchOnChange = (event) => {
    setNameSearchTerm(event.target.value.toLowerCase());
  };

  const handleTagSearchOnChange = (event) => {
    setTagSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="align">
      <div className="main-container">
        <div className="search-bars-container">
          <SearchBar
            handleSearchOnChange={handleNameSearchOnChange}
            searchType="name"
          />
          <SearchBar
            handleSearchOnChange={handleTagSearchOnChange}
            searchType="tag"
          />
        </div>
        <div className="profile-container">
          <StudentProfiles
            studentProfiles={data.students}
            nameSearchTerm={nameSearchTerm}
            tagSearchTerm={tagSearchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
