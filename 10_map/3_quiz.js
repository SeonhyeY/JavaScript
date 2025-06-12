// Remove duplicates from the given array
const fruits = ['🥝', '🍎', '🍇', '🥝', '🍎', '🍑'];
const newFruits = new Set(fruits);

function removeDuplication(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplication(fruits));

// Create a set that contains only the common items of two given sets
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

console.log(findCommon(set1, set2));
function findCommon(set1, set2) {
  const newSet = [...set1].filter((item) => set2.has(item));
  return newSet;
}
