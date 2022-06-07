import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import StudentProfiles from "./components/StudentProfiles.jsx";
import SearchBar from "./components/SearchBar.jsx";

const App = () => {
  const [studentProfiles, setStudentProfiles] = useState(null);
  const [nameSearchTerm, setNameSearchTerm] = useState(null);
  const [tagSearchTerm, setTagSearchTerm] = useState(null);

  useEffect(() => {
    fetchStudentProfiles();
  }, []);

  const apiURL = "https://api.hatchways.io/assessment/students";

  const fetchStudentProfiles = () => {
    axios.get(apiURL).then((response) => {
      console.log("studentProfiles:", response.data.students);
      setStudentProfiles(response.data.students);
    });
  };

  const handleNameSearchOnChange = (event) => {
    setNameSearchTerm(event.target.value.toLowerCase());
    console.log("nameSearchTerm:", event.target.value.toLowerCase());
  };

  const handleTagSearchOnChange = (event) => {
    setTagSearchTerm(event.target.value.toLowerCase());
    console.log("tagSearchTerm:", event.target.value.toLowerCase());
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
            studentProfiles={studentProfiles}
            nameSearchTerm={nameSearchTerm}
            tagSearchTerm={tagSearchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
