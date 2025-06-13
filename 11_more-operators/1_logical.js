/** Logical Operators
 * && and
 * || or
 * short-circuit evaluation
 */
const obj1 = { name: '🦜' };
const obj2 = { name: '🐢', owner: 'Chloe' };

if (obj1 && obj2) {
  console.log('Both are true');
}

let result = obj1 && obj2;
console.log(result); // { name: '🐢', owner: 'Chloe' }

result = obj1 || obj2;
console.log(result); // { name: '🐯' }

// e.g.
// Use && when you want to do something *only if* the condition is truthy
// Use || when you want to do something *only if* the condition is falsy
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('No Owner');
  }
  animal.owner = 'Owner updated!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('Already has a owner!');
  }
  animal.owner = 'New Owner!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // { name: '🦜' }
console.log(obj2); // { name: '🐢', owner: 'Owner updated!' }

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // { name: '🦜', owner: 'New Owner!' }
console.log(obj2); // { name: '🐢', owner: 'Owner updated!' }

// When you want to check if a value is null or undefined
let item; //= { price: 1 };
const price = item && item.price;
console.log(price);

// Setting a default value
// Default parameters are used when no value or `undefined` is passed
// Using || assigns the default if the value is falsy (e.g., 0, -0, null, undefined, '', false)
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
print(); // Hello
print(null); // Hello
print(undefined); // Hello
print(0); // Hello
