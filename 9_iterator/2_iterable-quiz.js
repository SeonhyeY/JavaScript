// [Symbol.iterator](): Iterator{ next(): {value, done}}
// Create an iterator that iterates over the double of numbers from 0 to less than 10!
// 0, 1, 2, 3, ..., 9
// 0, 2, 4, 6, ..., 18
const multiple = {
  [Symbol.iterator]: () => {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: 2 * num++, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
