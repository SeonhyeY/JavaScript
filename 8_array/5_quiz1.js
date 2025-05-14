/** Quiz1
 * Create a function that replaces apple items in a given array with grapes
 * Make sure not to modify the original array!
 * input: ['🍎', '🥝', '🍎', '🍑']
 * output: ['🍇', '🥝', '🍇', '🍑']
 */
const fruits = ['🍎', '🥝', '🍎', '🍑'];

function replaceFruit(input) {
  const newFruit = Array.from(input);
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '🍎') {
      newFruit[i] = '🍇';
    }
  }
  return newFruit;
}
const result = replaceFruit(fruits);
console.log(result);
console.log(fruits);

function replaceUpgrade(input, oldItem, replacement) {
  const newFruit = Array.from(input);
  for (let i = 0; i < input.length; i++) {
    if (input[i] === oldItem) {
      newFruit[i] = replacement;
    }
  }
  return newFruit;
}
console.log(replaceUpgrade(fruits, '🍑', '🍓'));
console.log(fruits);

/** Quiz2
 * Create a function that takes an array and a specific element,
 * and counts how many times that element appears in the array
 * input: ['🍎', '🥝', '🍎', '🍑'], '🍎'
 * output: 2
 */
function countItem(input, countingItem) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === countingItem) {
      count++;
    }
  }
  return count;
}
console.log(countItem(fruits, '🍎'));
console.log(countItem(fruits, '🥝'));
console.log(countItem(fruits, '✨'));

/** Quiz3
 * Create a function that takes two arrays and
 * returns a new array containing only the items from the first array that also exist in the second array
 * input: ['🍎', '🥝', '🍑'], ['🍇', '🥝', '🍇', '🍑']
 * output: ['🥝', '🍑']
 */
const arr1 = ['🍎', '🥝', '🍑'];
const arr2 = ['🍇', '🥝', '🍇', '🍑'];
function commonFruit(input1, input2) {
  const result = [];
  for (let i = 0; i < input1.length; i++) {
    if (input2.includes(input1[i])) {
      result.push(input1[i]);
    }
  }
  return result;
}
console.log(commonFruit(arr1, arr2));
