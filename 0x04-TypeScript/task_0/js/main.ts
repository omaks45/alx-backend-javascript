// Write an interface named Student that accepts the following elements
// firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

// student interface

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// student objects

const student1: Student = {
  firstName: 'Okoro',
  lastName: 'Omaka',
  age: 45,
  location: 'Abuja'
 }

const student1: Student = {
  firstName: 'Beida',
  lastName: 'Yusuf',
  age: 35,
  location: 'Kano'
}

// create an array of the student interface.

const studentList = [student1, student2];

// grab the table created

const table = document.getElementById('studentTable') as HTMLTableElement;

// Iterate over the array and also create a new row and insert into the table.

studentList.forEach((student) => {
  const row = table.insertrow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  const firstNameCell.innerHTML = student.firstName;
  const locationCell.innerHTML = student.location;
})
