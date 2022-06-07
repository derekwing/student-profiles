import React from "react";
import StudentProfile from "./StudentProfile.jsx";

const StudentProfiles = ({ studentProfiles, searchTerm }) => {
  if (searchTerm) {
    return studentProfiles
      ? studentProfiles
          .filter(
            (student) =>
              student.firstName.toLowerCase().indexOf(searchTerm) >= 0 ||
              student.lastName.toLowerCase().indexOf(searchTerm) >= 0
          )
          .map((studentProfile) => {
            return (
              <StudentProfile
                key={studentProfile.id}
                studentProfile={studentProfile}
              />
            );
          })
      : null;
  }

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
