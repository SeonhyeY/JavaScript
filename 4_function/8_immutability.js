/** Immutability
 * ❌ Do not modify the value of arguments passed from outside within a function.
 * ✨ If a state change is needed, create and return a new state (object or value).
 * Primitive values — copied by value.
 * Object values — copied by reference (memory address).
 */
function display(num) {
  num = 5;
  console.log(num); // 5
}
const value = 4;
display(value);
console.log(value); // 4

function displayObject(obj) {
  obj.name = 'Bob'; // ❌❌❌ Do not modify the input argument (especially objects) from outside ❌❌❌
  console.log(obj); // Bob
}
const person = { name: 'Sam' };
displayObject(person);
console.log(person.name); // Bob

function changeName(obj) {
  // Give the impression that the name is being changed!
  return { ...obj, name: 'Bob' }; // Always return a new object when changing values!
}
