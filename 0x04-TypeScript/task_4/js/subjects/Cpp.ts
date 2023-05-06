namespace Subjects {
  export interface Teacher {
    experiencTeachingC?: number;
  }
  export class Cpp extends Subject {
    getRequirement(): string {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC <=0 ? `No available teacher` : `Available Teacher ${this.teacher.firstName}`;
    }
  }
}
