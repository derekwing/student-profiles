import React, { useState } from "react";
import "./StudentProfile.css";
import ToggleListViewButton from "./ToggleListViewButton.jsx";
import ToggleCollapseListButton from "./ToggleCollapseListButton.jsx";
import AddTagField from "./AddTagField.jsx";
import TestScores from "./TestScores.jsx";

const StudentProfile = ({ studentProfile }) => {
  const [listOpen, setListOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState(null);

  const handleTagOnChange = (event) => {
    console.log("event.target.value:", event.target.value);
    setTagValue(event.target.value);
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();
    const tag = tagValue;
    const tagsElem = document.getElementById("tags");

    if (tag.length >= 0) {
      const tagElem = document.createElement("div");
      tagElem.className = "tag";
      tagElem.innerHTML = tag;
      tagsElem.append(tagElem);
      setTags([...tags, tag]);
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
            <div id="tags"></div>
          </div>
          <div>
            <AddTagField
              setTagValue={setTagValue}
              tagValue={tagValue}
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
