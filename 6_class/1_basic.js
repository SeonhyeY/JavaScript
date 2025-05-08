// Templates to create objects easily
// 1. Constructor function (old, classic)
// 2. Class✨
class Fruit {
  // constructor: function called when creating an object using the 'new' keyword
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 'apple' is an instance of the Fruit class
const apple = new Fruit('apple', '🍎');
// 'kiwi' is an instance of the Fruit class
const kiwi = new Fruit('kiwi', '🥝');

console.log(apple);
console.log(kiwi);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
