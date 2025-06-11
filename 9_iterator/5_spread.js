/** Spread
 * All Iterable objects can be spread
 * Anything that is iterable can be expanded (spread) out one by one
 * fun(...iterable)
 * [ ...iterable ]
 * { ...obj }
 * EcmaScript 2018
 */
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
// console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

// Rest Parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 5, 7, 6);

// Array Concat
const fruits1 = ['🍓', '🍑'];
const fruits2 = ['🍇', '🍎'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '🥝', ...fruits2];
console.log(arr);

// Object
const jamie = {
  name: 'Jamie',
  age: 18,
  home: {
    address1: '',
    address2: '',
    postalCode: '',
  },
};
const updated = {
  ...jamie,
  job: 'student',
};
console.log(jamie);
console.log(updated);
