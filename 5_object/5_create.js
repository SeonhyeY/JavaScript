// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };
// const orange = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// constructor function
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // Optional – automatically returned when using 'new'
}
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);
apple.display();
