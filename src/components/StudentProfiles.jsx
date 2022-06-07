import React from "react";
import StudentProfile from "./StudentProfile.jsx";

const StudentProfiles = ({ studentProfiles, nameSearchTerm }) => {
  if (nameSearchTerm) {
    return studentProfiles
      ? studentProfiles
          .filter(
            (student) =>
              student.firstName.toLowerCase().indexOf(nameSearchTerm) >= 0 ||
              student.lastName.toLowerCase().indexOf(nameSearchTerm) >= 0
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
