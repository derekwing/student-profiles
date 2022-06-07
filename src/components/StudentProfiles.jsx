import React from "react";
import StudentProfile from "./StudentProfile.jsx";

const StudentProfiles = ({ studentProfiles }) => {
  return studentProfiles
    ? studentProfiles.map((studentProfile) => {
        return (
          <StudentProfile
            key={studentProfile.id}
            studentProfile={studentProfile}
          />
        );
      })
    : null;
};

export default StudentProfiles;
