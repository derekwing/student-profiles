import React from "react";
import "./StudentProfile.css";

const StudentProfile = ({ studentProfile }) => {
  return (
    <div>
      <img
        src={studentProfile.pic}
        alt={`Profile picture of ${studentProfile.firstName} ${studentProfile.lastName}`}></img>
      <div className="student-name">{`${studentProfile.firstName} ${studentProfile.lastName}`}</div>
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
    </div>
  );
};

export default StudentProfile;
