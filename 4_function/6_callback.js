// callback function
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// The passed-in 'action' is a callback function
// Instead of calling the function immediately and passing its return value,
// the reference (memory address) to the function is passed
// Therefore, the function is called later at the right moment inside the higher-order function
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}
calculator(2, 3, add);
calculator(2, 3, multiply);
