/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((obj) => obj.location === city)
    .map((students) => {
    //   console.log(newGrade);
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === students.id) {
          // eslint-disable-next-line no-param-reassign
          students.grade = studentGrade.grade;
        }

        if (!students.hasOwnProperty('grade')) {
          students.grade = 'N/A';
        }
        return students;
      });

      return students;
    });
}
