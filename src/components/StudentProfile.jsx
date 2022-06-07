import React from "react";
import "./StudentProfile.css";

const StudentProfile = ({ studentProfile }) => {
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
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default StudentProfile;
