// Extend
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('Animal: Eat!');
  }
  sleep() {
    console.log('Sleep!');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('yellow');
console.log(tiger);
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('Play!');
  }
  // Overriding
  eat() {
    super.eat();
    console.log('Dog: eat!');
  }
}
const dog = new Dog('golden', 'Lynne');
console.log(dog);
dog.play();
dog.eat();
