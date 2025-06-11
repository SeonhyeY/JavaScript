// [Symbol.iterator](): Iterator{ next(): {value, done}}
// Create an iterator that iterates over the double of numbers from 0 to less than 10!
// 0, 1, 2, 3, ..., 9
// 0, 2, 4, 6, ..., 18
function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]: () => {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, (num) => num * 2);
for (const num of multiple) {
  console.log(num);
}
