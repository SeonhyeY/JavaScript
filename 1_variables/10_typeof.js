// typeof: Check the type of data
// return type(as string) of value
// The type is dynamically determined by the assigned value
// ➡️JavaScript is Dynamic, weakly typed programming language
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123); // number
console.log(typeof '123'); // string
