// If return is not explicitly specified, the function automatically returns undefined
function add(a, b) {
  return a + b;
}
const result = add(1, 2);
console.log(result);

// If return is used in the middle of a function, the function exits at that point
// e.g., exit early at the beginning of the function if the condition is not met
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
