// Static property/method
class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // Class-level method
  static makeRandomFruit() {
    // this does not refer to an instance in static methods
    return new Fruit('orange', '🍊');
  }

  // Instance-level method
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const orange = Fruit.makeRandomFruit();
console.log(orange);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple', '🍎');
const kiwi = new Fruit('kiwi', '🥝');

console.log(apple);
console.log(kiwi);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

Math.pow();
Number.isFinite(1);
