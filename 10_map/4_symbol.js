/** Symbol
 * Creates a unique key 🗝️
 */
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = 'key';
map.set(key1, 'Hello');
console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false

// If you want to use the same key with the same name, use Symbol.for
// Global Symbol Registry
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

console.log(Symbol.keyFor(k1)); // 'key'
console.log(Symbol.keyFor(key1)); // undefined: not registered in the global registry

const obj = {
  [k1]: 'Hello',
  [Symbol('key')]: 1,
};
console.log(obj);
console.log(obj[k1]); // Hello
console.log(obj[Symbol('key')]); // undefined
