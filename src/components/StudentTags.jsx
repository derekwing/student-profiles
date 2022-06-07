import React from "react";
import StudentTag from "./StudentTag.jsx";

const StudentTags = ({ studentProfileId, studentTags }) => {
  // console.log("studentTags:", studentTags);
  // console.log("studentProfileId:", studentProfileId);
  return studentTags[studentProfileId]
    ? studentTags[studentProfileId].map((studentTag) => {
        return <StudentTag studentTag={studentTag} />;
      })
    : null;
};

export default StudentTags;
