import React, { useState } from "react";
import ToggleListViewButton from "./ToggleListViewButton.jsx";
import ToggleCollapseListButton from "./ToggleCollapseListButton.jsx";
import AddTagField from "./AddTagField.jsx";
import TestScores from "./TestScores.jsx";
import StudentTags from "./StudentTags.jsx";
import "./StudentProfile.css";

const StudentProfile = ({ studentProfile, studentTags, setStudentTags }) => {
  const [listOpen, setListOpen] = useState(false);
  const [tagValue, setTagValue] = useState(null);

  const handleTagOnChange = (event) => {
    console.log("event.target.value:", event.target.value);
    setTagValue(event.target.value);
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();
    const tag = tagValue;

    if (tag.length >= 0) {
      // const tagElem = document.createElement("div");
      // tagElem.className = "tag";
      // tagElem.innerHTML = tag;
      // tagsElem.append(tagElem);
      if (studentTags[studentProfile.id] === undefined) {
        console.log("Undefined student profile id");
        console.log("Before adding new student tag:", studentTags);
        setStudentTags({ ...studentTags, [studentProfile.id]: [tag] });
        console.log("After adding onto object state:", studentTags);
      } else {
        studentTags[studentProfile.id].push(tag);
        // setStudentTags({ ...studentTags, [studentProfile.id]: [...tags, tag] });
        console.log("After adding onto object state:", studentTags);
        console.log("Student Id is defined");
      }
    }

    setTagValue(null);
    document.getElementById("add-tag-field").value = "";
  };

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
            <div className="tags">
              <StudentTags
                studentTags={studentTags}
                studentProfileId={studentProfile.id}
              />
            </div>
          </div>
          <div>
            <AddTagField
              handleTagOnChange={handleTagOnChange}
              handleTagSubmit={handleTagSubmit}
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
