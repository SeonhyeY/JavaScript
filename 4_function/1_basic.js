function add(num1, num2) {
  return num1 + num2;
}
const result = add(1, 2);
console.log(result);

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let lastName = 'Kim';
let firstName = 'Jisoo';
console.log(getFullName(firstName, lastName));

let lastName2 = 'Sung';
let firstName2 = 'Jiwon';
console.log(getFullName(firstName2, lastName2));
