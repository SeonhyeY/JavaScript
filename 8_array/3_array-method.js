/** Array Methods
 * Check whether they mutate the original array
 * or return a new one
 */
let fruits = ['🍎', '🥝', '🍇'];

// Check if a value is an array
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// Find index of a specific item
console.log(fruits.indexOf('🍎')); // 0

// Check if array contains a specific item
console.log(fruits.includes('🍎')); // true

/* Mutating Methods */
// Add to the end
let length = fruits.push('🍑');
console.log(fruits); // [ '🍎', '🥝', '🍇', '🍑' ]
console.log(length); // 4
// Add to the beginning
length = fruits.unshift('🍊');
console.log(fruits); // [ '🍊', '🍎', '🥝', '🍇', '🍑' ]
console.log(length); // 5

// Remove from the end
let lastItem = fruits.pop();
console.log(fruits); // [ '🍊', '🍎', '🥝', '🍇' ]
console.log(lastItem); // '🍑': Return deleted item as String

// Remove from the beginning
lastItem = fruits.shift();
console.log(fruits); // [ '🍎', '🥝', '🍇' ]
console.log(lastItem); // '🍊': Return deleted item as String

// Add or remove from middle
const deleted = fruits.splice(1, 1);
console.log(fruits); // [ '🍎', '🍇' ]
console.log(deleted); // ['🥝']: Return deleted item as Array
fruits.splice(1, 0, '🍑', '🍓');
console.log(fruits); // [ '🍎', '🍑', '🍓', '🍇' ]

// Fill array with static values
fruits.fill('s', 1, 3); // ✅ This mutates the original array
console.log(fruits); // [ '🍎', 's', 's', '🍇' ]
fruits.fill(0);
console.log(fruits); // [ 0, 0, 0, 0 ]

// Reverse order
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

/* Non-Mutating Methods */
// Create a new array from a slice
fruits = ['🍎', '🍑', '🍓', '🍇'];
let newArr = fruits.slice(0, 2);
console.log(newArr); // [ '🍎', '🍑']
console.log(fruits); // [ '🍎', '🍑', '🍓', '🍇' ]: Not changed
newArr = fruits.slice(-1);
console.log(newArr); // [ '🍇' ]

// Concatenate multiple arrays
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// Flatten nested arrays
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]
arr = arr.flat(2);

// Join array into string
let text = arr.join();
console.log(text); // '1,2,3,4,5,6'
text = arr.join(' | ');
console.log(text); // '1 | 2 | 3 | 4 | 5 | 6'
