/** Iterable
 * [Symbol.iterator](): Iterator;
 * An object that has a Symbol-defined method or a specific function returning an Iterator
 * is considered an iterable object
 * If it's iterable, you can use `for ... of` and the spread operator.
 */
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 };
// for (const item of obj); // obj is not iterable
for (const item in obj) {
  console.log(item);
}

const iterator1 = array.values();
console.log(iterator1.next()); // { value: 1, done: false }
console.log(iterator1.next()); // { value: 2, done: false }
console.log(iterator1.next()); // { value: 3, done: false }
console.log(iterator1.next()); // { value: undefined, done: true }

const iterator2 = array.values();
while (true) {
  const item = iterator2.next();
  if (item.done) break;
  console.log(item.value);
}
