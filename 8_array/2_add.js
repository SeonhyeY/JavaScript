const fruits = ['🍎', '🥝', '🍌', '🍇'];

// How to access array items
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log(fruits.length);

// Add, Deleted - Not Recommended 👎 - can create sparse arrays
fruits[6] = '🍑';
console.log(fruits); // [ '🍎', '🥝', '🍌', '🍇', <2 empty items>, '🍑' ]

delete fruits[1];
console.log(fruits); // [ '🍎', <1 empty item>, '🍌', '🍇', <2 empty items>, '🍑' ]
