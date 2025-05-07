// A function that loops from 0 up to the given number
// While looping, it should perform a specific given task
// Example: 5 — you want to print all the numbers during the loop
// Example: 5 — you want to print double the value of each number during the loop
const log = (num) => num;
const logDoubled = (num) => 2 * num;
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    console.log(action(i));
  }
}
iterate(5, log);
iterate(5, logDoubled);

setTimeout(() => {
  console.log('in 1 sec');
}, 1000);
