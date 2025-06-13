/** Optional Chaining Operator
 * ES11 (ECMAScript 2020)
 * ?.
 * Used to safely access nested object properties
 * without throwing an error when a reference is null or undefined
 */
let item; //= { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: '🐕', owner: { name: 'Mary', age: 23 } };
function printName(obj) {
  const ownerName1 = obj && obj.owner && obj.owner.name;
  const ownerName2 = obj?.owner?.name;
  console.log(ownerName1, ownerName2);
}
printName(obj);
