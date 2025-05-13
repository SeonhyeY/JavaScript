// Quiz!
// 1. Print each character of the string one by one
// H
// e
// l
// l
// ...
// !
const text = 'Hello World!';
// for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }

function printChars(text) {
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
}
printChars(text);

// 2. Extract user IDs and store each one in an array
// [ 'user1', 'user2', 'user3', 'user4' ]
const ids = 'user1, user2, user3, user4';
const arrayIds = ids.split(', ');
console.log(arrayIds);

// 3. Display the current time (with date) every second
// use setInterval
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('en-US'));
}, 1000);
