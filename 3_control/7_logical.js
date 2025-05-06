/** Logical operators
 * && and
 * || or
 * ! not
 * !! converts to boolean type
 */
let num = 21;
if (!(num <= 0 || num > 20)) {
  console.log('👍');
}

if (num != 8) {
  console.log('✨');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text'); // false
console.log(!!'text'); // true
