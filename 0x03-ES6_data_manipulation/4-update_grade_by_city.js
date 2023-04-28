/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((obj) => obj.location === city)
    .map((student) => {
    //   console.log(newGrade);
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          // eslint-disable-next-line no-param-reassign
          student.grade = studentGrade.grade;
        }

<<<<<<< HEAD
        if (!students.hasOwnProperty('grade')) {
          students.grade = 'N/A';
=======
        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
>>>>>>> 9e2b50a4dc13605dd47fc976e11ee5323fe82c29
        }
        return student;
      });

      return student;
    });
}
