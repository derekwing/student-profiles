import React from "react";
import "./TestScores.css";

const TestScores = ({ studentProfileGrades, listOpen }) => {
  if (listOpen) {
    return (
      <div className="student-grades">
        {studentProfileGrades.map((grade, index) => {
          return (
            <div className="grades-container">
              <div>Test {index + 1}:</div>
              <div>{grade}%</div>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export default TestScores;
