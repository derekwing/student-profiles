import React, { useState } from "react";
import StudentProfile from "./StudentProfile.jsx";
import data from "../lib/data";

const StudentProfiles = ({ nameSearchTerm, tagSearchTerm }) => {
  const [studentTags, setStudentTags] = useState({});

  // Filter by name when only there is some value in the name search bar
  if (nameSearchTerm && !tagSearchTerm) {
    return data.students
      ? data.students
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
    let filteredStudents = [];
    if (data.students) {
      data.students.forEach((studentProfile) => {
        if (studentTags[studentProfile.id]) {
          studentTags[studentProfile.id].forEach((tag) => {
            if (tag.indexOf(tagSearchTerm) >= 0) {
              if (filteredStudents.length === 0) {
                filteredStudents.push(studentProfile);
              }
              let isDuplicate = false;
              filteredStudents.forEach((student) => {
                if (student.id === studentProfile.id) {
                  isDuplicate = true;
                }
              });
              if (isDuplicate === false) {
                filteredStudents.push(studentProfile);
              }
            }
          });
        }
      });
    }
    return filteredStudents
      ? filteredStudents.map((studentProfile) => {
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
    let filteredStudents = [];
    if (data.students) {
      data.students.forEach((studentProfile) => {
        if (studentTags[studentProfile.id]) {
          studentTags[studentProfile.id].forEach((tag) => {
            if (tag.indexOf(tagSearchTerm) >= 0) {
              if (filteredStudents.length === 0) {
                filteredStudents.push(studentProfile);
              }
              let isDuplicate = false;
              filteredStudents.forEach((student) => {
                if (student.id === studentProfile.id) {
                  isDuplicate = true;
                }
              });
              if (isDuplicate === false) {
                filteredStudents.push(studentProfile);
              }
            }
          });
        }
      });
    }
    return filteredStudents
      ? filteredStudents
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

  return data.students
    ? data.students.map((studentProfile) => {
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
