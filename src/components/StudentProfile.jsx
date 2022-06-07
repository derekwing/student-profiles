import React, { useState } from "react";
import "./StudentProfile.css";
import ToggleListViewButton from "./ToggleListViewButton.jsx";
import ToggleCollapseListButton from "./ToggleCollapseListButton.jsx";
import TestScores from "./TestScores.jsx";

const StudentProfile = ({ studentProfile }) => {
  const [listOpen, setListOpen] = useState(false);

  return (
    <>
      <div className="student-profile">
        <div>
          <img
            className="profile-pic"
            src={studentProfile.pic}
            alt={`Profile picture of ${studentProfile.firstName} ${studentProfile.lastName}`}></img>
        </div>
        <div>
          <div className="student-name">{`${studentProfile.firstName.toUpperCase()} ${studentProfile.lastName.toUpperCase()}`}</div>
          <div className="student-details">
            <div>Email: {studentProfile.email}</div>
            <div>Company: {studentProfile.company}</div>
            <div>Skill: {studentProfile.skill}</div>
            <div>
              Average:{" "}
              {studentProfile.grades
                .map((stringValue) => {
                  return Number(stringValue);
                })
                .reduce((prev, cur) => {
                  return prev + cur;
                }) / studentProfile.grades.length}
              %
            </div>
            <TestScores
              studentProfileGrades={studentProfile.grades}
              listOpen={listOpen}
            />
          </div>
        </div>
        {listOpen ? (
          <ToggleCollapseListButton
            setListOpen={setListOpen}
            listOpen={listOpen}
          />
        ) : (
          <ToggleListViewButton setListOpen={setListOpen} listOpen={listOpen} />
        )}
      </div>
      <hr></hr>
    </>
  );
};

export default StudentProfile;
