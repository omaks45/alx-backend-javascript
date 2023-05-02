//  building  a Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;

  [proName: string]: any
}

// Extending the Teacher class

interface Directors extends Teacher {
  numberOfReports: number;
}

// Printing teachers 
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction(firstName: string, lastName: string): string => `${firstName.CharAt[0]} ${lastName}`;

// Writing a class

interface classes {
  firstName: string;
  lastName: string;
  workOnHomeWork(): string;
  displayName(): string;
}
// create the class
class studentClass implements classes {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

// the methods of the class
  workOnHomeWork() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}
