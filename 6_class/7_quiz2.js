// Let's create a way to represent full-time and part-time employees
// Employee information: name, department name, working hours per month
// Each month, we can calculate their salary using this information
// Full-time employees earn $45 per hour
// Part-time employees earn $25 per hour
class Employee {
  constructor(name, department, workHour, payRate) {
    this.name = name;
    this.department = department;
    this.workHour = workHour;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.workHour * this.payRate;
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 25;
  constructor(name, department, workHour) {
    super(name, department, workHour, PartTimeEmployee.PAY_RATE);
  }
}
class FullTimeEmployee extends Employee {
  static PAY_RATE = 45;
  constructor(name, department, workHour) {
    super(name, department, workHour, FullTimeEmployee.PAY_RATE);
  }
}

const workerPart = new PartTimeEmployee('Sarah', 'S/W', 23);
const workerFull = new FullTimeEmployee('Medison', 'DevOps', 37);
console.log(workerPart.calculatePay());
console.log(workerFull.calculatePay());
