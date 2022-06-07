import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import StudentProfiles from "./components/StudentProfiles.jsx";
import SearchBar from "./components/SearchBar.jsx";

const App = () => {
  const [studentProfiles, setStudentProfiles] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

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

  const handleSearchOnChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="round-container">
      <div className="container">
        <SearchBar handleSearchOnChange={handleSearchOnChange} />
        <StudentProfiles
          studentProfiles={studentProfiles}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default App;
