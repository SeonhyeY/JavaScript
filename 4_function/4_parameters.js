/** Parameters
 * default: undefined
 * You can assign default values to parameters — Default Parameters
 * Parameter information is stored in the arguments object, which is accessible inside the function
 */
function add(a, b = 1) {
  console.log(a, b); // undefined, 1
  return a + b;
}
add();

function mutiply(a, b) {
  console.log(a, b); // 1, 2
  console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
  return a + b;
}
mutiply(1, 2, 3);

// Rest Parameters
function sum(a, b, ...numbers) {
  console.log(a, b, numbers); // 1 2 [3, 4, 5]
}
sum(1, 2, 3, 4, 5);
