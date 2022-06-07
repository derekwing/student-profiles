import React from "react";
import StudentTag from "./StudentTag.jsx";
import "./StudentTags.css";

const StudentTags = ({ studentProfileId, studentTags }) => {
  return studentTags[studentProfileId]
    ? studentTags[studentProfileId].map((studentTag, index) => {
        return <StudentTag studentTag={studentTag} key={index} />;
      })
    : null;
};

export default StudentTags;
