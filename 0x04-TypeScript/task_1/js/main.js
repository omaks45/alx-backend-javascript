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
