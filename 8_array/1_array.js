// How to create an Array
let array = new Array(2);
console.log(array);

array = new Array(1, 2, 3);
console.log(array);
array = Array.of(1, 2, 3, 4, 5);
console.log(array);

const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);
array = Array.from(anotherArray); // iterable object
console.log(array);

// Normally, arrays have a fixed memory size and are stored in contiguous memory
// However, in JavaScript, arrays are not stored contiguously,
// and they are similar to objects!
// JavaScript arrays are special objects that mimic the behavior of regular arrays!
// To compensate for this, JavaScript provides Typed Arrays with fixed types (Typed Collections)
array = Array.from({
  0: 'Hel',
  1: 'llo',
  length: 2,
});
console.log(array);
