// let vs. const
// Re-assign
let a = 1;
a = 2;

const text = 'hello';
// text = 'hi'; not available

// 1. Constant
const MAX_RESULTS = 5;
// 2. Constant variable or variable
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
apple.name = 'green apple';
apple.display = '🍏';
// apple = {} // You can't reassign the reference itself (the memory address),
// but you *can* change the properties of the object it points to.
