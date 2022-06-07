import React, { useState } from "react";
import StudentProfile from "./StudentProfile.jsx";

const StudentProfiles = ({ studentProfiles, nameSearchTerm }) => {
  const [studentTags, setStudentTags] = useState({});

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
                studentTags={studentTags}
                setStudentTags={setStudentTags}
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
            studentTags={studentTags}
            setStudentTags={setStudentTags}
          />
        );
      })
    : null;
};

export default StudentProfiles;
