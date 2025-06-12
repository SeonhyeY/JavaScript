/** Set
 * A collection of values.
 * ❌ No guaranteed order of elements.
 * ✅ Iterable and useful for filtering duplicates.
 */
const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.size); // 3

// Check if a value exists in the set
console.log(set.has(2)); // true
console.log(set.has(5)); // false

// iterable
set.forEach((item) => console.log(item));
for (const value of set) {
  console.log(value);
}

// add
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }

// delete
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// delete all
set.clear();
console.log(set); // Set(0) {}

// object set
const obj1 = { name: '🍎', price: 1.29 };
const obj2 = { name: '🍇', price: 4.99 };
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) { { name: '🍎', price: 1.29 }, { name: '🍇', price: 4.99 } }

const obj3 = { name: '🍇', price: 4.99 };
objs.add(obj3);
console.log(objs); // Set(3) {{ name: '🍎', price: 1.29 }, { name: '🍇', price: 4.99 }, { name: '🍇', price: 4.99 }}

// shallow copy
obj1.price = 10;
objs.add(obj1);
console.log(objs); // Set(3) {{ name: '🍎', price: 10 }, { name: '🍇', price: 4.99 }, { name: '🍇', price: 4.99 }}
