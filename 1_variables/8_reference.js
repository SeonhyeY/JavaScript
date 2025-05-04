// Primitive Type: copy by value
let a = 1;
let b = a;
b = 2;
console.log(a, b); // 1, 2

// Object Type: copy by reference
let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
let orange = apple;
orange.name = 'orange';
console.log(apple.name, orange.name); // orange, orange
