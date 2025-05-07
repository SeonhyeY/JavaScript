// Function Declaration: function name() {}
// Function Expression: const name = function () {}
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// Arrow function: const name = () => {}
add = (a, b) => {
  return a + b;
};
add = (a, b) => a + b;
console.log(add(1, 2));

// Constructor Function: const object = new Function() // covered in the object section

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('✨');
})();
