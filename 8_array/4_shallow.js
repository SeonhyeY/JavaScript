/** Shallow Copy - Copy by Reference
 * In JavaScript, most copy methods create a shallow copy!
 * Examples: Array.from, concat, slice, spread (...), Object.assign
 */

const pizza = { name: '🍕', price: 2, owner: { name: 'Sarah' } };
const ramen = { name: '🍜', price: 1 };
const sushi = { name: '🍣', price: 3 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1: ', store1);
console.log('store2: ', store2);

store2.push(sushi);
console.log('store1: ', store1);
console.log('store2: ', store2);

pizza.price = 4;
console.log('store1: ', store1);
console.log('store2: ', store2);
