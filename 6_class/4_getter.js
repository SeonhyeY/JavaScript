// Accessor Property
// Getter & Setter
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('David', 'Wilson');
console.log(student.firstName);
console.log(student.fullName); // get
student.fullName = 'Mark Lee';
console.log(student); // set
