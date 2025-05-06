/** Equality Operators
 * ==: same value
 * !=: different value
 * ===: same value and data type
 * !==: different value and data type
 */
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false

console.log(2 == '2'); // true
console.log(2 === '2'); // false ✨
console.log(2 != '2'); // false
console.log(2 !== '2'); //true

console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

console.clear();

const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
};
console.log(obj1 == obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

const obj3 = obj1;
const obj4 = { ...obj1 };
console.log(obj1 == obj3); // true
console.log(obj1 === obj3); // true
console.log(obj1 == obj4); // false
