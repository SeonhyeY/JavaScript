// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: 2 * num++, done: num > max };
//       },
//     };
//   },
// };

function* mulipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i * 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = mulipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); // 0
next = multiple.next();
console.log(next.value, next.done); // 2, false
next = multiple.next();
console.log(next.value, next.done); // 4, false

multiple.return();
multiple.throw('Error!');
next = multiple.next();
console.log(next.value, next.done); // error
