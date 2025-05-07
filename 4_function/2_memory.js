function add(a, b) {
  return a + b;
}
const sum = add;
console.log(add === sum);
console.log(sum(1, 2));
