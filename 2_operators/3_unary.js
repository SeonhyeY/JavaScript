/** Unary Operators
 * + plus: converts to number type
 * - minus: converts to number type and negates value
 * ! logical NOT: inverts boolean
 */
let a = '10';
a = +a;
console.log(a);
let b = '10';
b = -b;
console.log(b);

let c = 5;
c = -c;
console.log(c, -c); // -5, 5

console.log(!c); // false

let boolean = true;
console.log(boolean); // true
console.log(!boolean); // false
console.log(!!boolean); // true, !!: Convert values to Boolean type

// console.clear();
// What values are returned when non-numeric types are converted to numbers
// Using the unary plus (+) operator
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN
// Using the unary minus (-) operator
console.log(-false); // -0
console.log(-null); // -0
console.log(-''); // -0
console.log(-true); // -1
console.log(-'text'); // NaN
console.log(-undefined); // NaN
