/** Object
 * Object literal { key: value}
 *  key - character, string, number
 *  value - primitive value, object (function)
 * new Object()
 * Object.create();
 */
let apple = {
  name: 'apple', // ✨
  'hello-bye': '🤚',
  0: 1,
  ['hello-bye2']: '🫂', // 👎
};

// To access properties
console.log(apple.name); // dot notation
console.log(apple['name']); // bracket notation
console.log(apple['hello-bye2']);

// Adding a property
apple.emoji = '🍎';
console.log(apple);
console.log(apple.emoji);
console.log(apple['emoji']);

// Deleting a property
delete apple.emoji;
console.log(apple.emoji); // undefined
console.log(apple);
