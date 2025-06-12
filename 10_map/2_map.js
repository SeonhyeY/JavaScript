/** Map
 * A collection of [key, value] pairs.
 * 🔑 Keys are unique — no duplicate keys allowed
 * ✅ Values can be duplicated
 * 🔄 Maintains the insertion order of entries
 * ✅ Iterable and useful for fast key-based lookups
 */
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍇'],
]);
console.log(map);

console.log(map.size); // 2

// Check if a value exists in the set
console.log(map.has('key1')); // true
console.log(map.has('key5')); // false

// iterable
map.forEach((value, key) => console.log(`${key}: ${value}`));
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍎', '🍇' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍎' ], [ 'key2', '🍇' ] }

// get
console.log(map.get('key1')); // 🍎
console.log(map.get('key5')); // undefined

// add
map.set('key3', '🥝');
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍇', 'key3' => '🥝' }

// delete
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍇' }

// delete all
map.clear();
console.log(map); // Map(0) {}

// What’s the main difference from an object? — The available interfaces (methods) are different.
const key = { name: 'milk', price: 6.19 };
const milk = { name: 'milk', price: 6.19, description: 'fresh milk' };
const obj = {
  [key]: milk,
};
console.log(obj); // { '[object Object]': { name: 'milk', price: 6.19, description: 'fresh milk' }}
const map2 = new Map([[key, milk]]);
console.log(map2); // Map(1) { { name: 'milk', price: 6.19 } => { name: 'milk', price: 6.19, description: 'fresh milk' } }
console.log(obj[key]); // { name: 'milk', price: 6.19, description: 'fresh milk' }
console.log(map2[key]); // undefined
console.log(map2.get(key));
