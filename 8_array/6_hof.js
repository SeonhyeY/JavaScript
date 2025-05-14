// Ways to iterate over array items
const fruits = ['🍎', '🥝', '🍎', '🍑'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// When you want to do something while looping through an array
fruits.forEach(function (value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log('--------------------------');
});
fruits.forEach((value) => console.log(value));

// When searching for an item that matches a condition (via callback)
// find: returns the first item that matches the condition
const item1 = { name: '🍕', price: 2 };
const item2 = { name: '🍜', price: 1 };
const item3 = { name: '🍣', price: 3 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === '🍜');
console.log(result); // { name: '🍜', price: 1 }

// findIndex: returns the index of the first item that matches the condition
result = products.findIndex((value) => value.name === '🍜');
console.log(result); // 1

// some: Check if some of the items in the array match the condition (via callback)
result = products.some((item) => item.name === '🍕'); // Check if any item has the name 🍕
console.log(result); // true

// every: Check if all items in the array match the condition (via callback)
result = products.every((item) => item.name === '🍕'); // Check if all items have the name 🍕
console.log(result); // false

// filter: Return a new array containing all items that match the condition
result = products.filter((item) => item.name === '🍜'); // Create a new array with items whose name is 🍜
console.log(result); // [ { name: '🍜', price: 1 }, { name: '🍜', price: 1 } ]

/** Map
 * transforms each item in the array and creates a new array!
 */
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]
console.log(nums); // [ 1, 2, 3, 4, 5 ]
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else return item;
});
console.log(result); // [ 1, 4, 3, 8, 5 ]

/** Flatmap
 * Flattens a nested array
 */
result = nums.map((item) => [1, 3]);
console.log(result); // [ [ 1, 3 ], [ 1, 3 ], [ 1, 3 ], [ 1, 3 ], [ 1, 3 ] ]
result = nums.flatMap((item) => [1, 3]);
console.log(result); // [ 1, 3, 1, 3, 1, 3, 1, 3, 1, 3 ]

result = ['super', 'store'].map((text) => text.split(''));
console.log(result);
result = ['super', 'store'].flatMap((text) => text.split(''));
console.log(result);

/** Sort
 * Sorts array items
 * Sorts elements in ascending order as strings and modifies the original array
 */
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts); // [ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ]:  Does not sort numbers correctly due to string comparison
// < 0: a comes before b
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 0, 1, 2, 4, 5, 10 ]
// > 0: b comes before a
numbers.sort((a, b) => b - a);
console.log(numbers); // [ 10, 5, 4, 2, 1, 0 ]

/** Reduce
 * folds the array elements into a single value!
 */
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result); // 15
