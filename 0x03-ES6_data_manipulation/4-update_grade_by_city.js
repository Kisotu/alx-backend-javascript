/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((obj) => obj.location === city)
    .map((student) => {
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }

        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
