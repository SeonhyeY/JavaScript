/** Destructuring Assignment
 * Allows you to easily unpack values
 * from arrays or properties from objects into distinct variables
 */
const fruits = ['🍓', '🍑', '🍇', '🍎'];
const [first, second, ...others] = fruits;
console.log(fruits[0]);
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(`x: ${x}, y: ${y}, z: ${z}`);

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title, emoji);

const ellie = {
  name: 'Ellie',
  age: 23,
  job: 's/w engineer',
};
function display({ name, age, job }) {
  console.log('name', name);
  console.log('age', age);
  console.log('job', job);
}
display(ellie);

const { name, age, job: occupation, pet = 'Dog' } = ellie;
console.log(name, age, occupation, pet);
