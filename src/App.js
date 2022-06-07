import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import StudentProfiles from "./components/StudentProfiles.jsx";

const App = () => {
  const [studentProfiles, setStudentProfiles] = useState(null);

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
  return (
    <div className="round-container">
      <div className="container">
        <StudentProfiles studentProfiles={studentProfiles} />
      </div>
    </div>
  );
};

export default App;
