import React, { useState } from "react";
import StudentProfile from "./StudentProfile.jsx";

const StudentProfiles = ({
  studentProfiles,
  nameSearchTerm,
  tagSearchTerm,
}) => {
  const [studentTags, setStudentTags] = useState({});

  // Filter by name when only there is some value in the name search bar
  if (nameSearchTerm && !tagSearchTerm) {
    return studentProfiles
      ? studentProfiles
          .filter(
            (studentProfile) =>
              studentProfile.firstName.toLowerCase().indexOf(nameSearchTerm) >=
                0 ||
              studentProfile.lastName.toLowerCase().indexOf(nameSearchTerm) >= 0
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

  // Filter by tag when only there is some value in the tag search bar
  if (tagSearchTerm && !nameSearchTerm) {
    console.log("Only term is defined");
    // Return array of students where there tag has indexOf(tagSearchTerm) > 1
    return studentProfiles
      ? studentProfiles
          .filter((studentProfile) => {
            // If the tagSearchTerm exists in any elem in studentTags[studentProfile.id]
            // Then return true;
            debugger;
            console.log(
              "studentTags[studentProfile.id]:",
              studentTags[studentProfile.id]
            );
            // if (studentTags[studentProfile.id].length > 0) {
            //   for (let i = 0; i < studentTags[studentProfile.id]; i++) {
            //     const studentTag = studentTags[studentProfile.id][i];
            //     if (studentTag.indexOf(tagSearchTerm) >= 0) {
            //       return true;
            //     }
            //   }
            // }
            return false;
          })
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

  // Filter by name and tag when there is some value in BOTH name and tag search bars
  if (tagSearchTerm && nameSearchTerm) {
    console.log("BOTH terms are defined");
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
