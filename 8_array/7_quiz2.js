/** Quiz1
 * Create a function that replaces apple items in the given array with grape.
 * However, make sure not to modify the given array!
 * input: ['🍎', '🥝', '🍎', '🍑']
 * output: ['🍇', '🥝', '🍇', '🍑']
 */
const fruits = ['🍎', '🥝', '🍎', '🍑'];

function replaceUpgrade(input, oldItem, replacement) {
  return input.map((item) => (item === oldItem ? replacement : item));
}
console.log(replaceUpgrade(fruits, '🍎', '🍇'));
console.log(replaceUpgrade(fruits, '🍑', '🍓'));
console.log(fruits);

/** Quiz2
 * Create a function that counts how many times a specific element appears in the given array.
 * input: ['🍎', '🥝', '🍎', '🍑'], '🍎'
 * output: 2
 */
function countItem(input, countingItem) {
  return input.filter((item) => item === countingItem).length;
}
console.log(countItem(fruits, '🍎'));
console.log(countItem(fruits, '🥝'));
console.log(countItem(fruits, '✨'));

/** Quiz3
 * Given two arrays, return a new array containing only the items from the first array that are also in the second array.
 * input: ['🍎', '🥝', '🍑'], ['🍇', '🥝', '🍇', '🍑']
 * output: ['🥝', '🍑']
 */
const arr1 = ['🍎', '🥝', '🍑'];
const arr2 = ['🍇', '🥝', '🍇', '🍑'];
function commonFruit(input1, input2) {
  return input1.filter((item) => input2.includes(item));
}
console.log(commonFruit(arr1, arr2));

/** Quiz4
 * The average of numbers greater than or equal to 5
 */
const nums = [3, 16, 5, 25, 4, 34, 21];
const average = nums //
  .filter((num) => num > 5) //
  .reduce((sum, value, _, array) => (sum += value / array.length), 0);

console.log(average);
