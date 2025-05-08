/** Field
 * A variable used inside a class.
 * What if you want to prevent the field’s value from being modified from outside after an instance is created?
 * -> Use access modifiers – encapsulation
 * private (#), public (default), protected
 */
class Fruit {
  #name;
  #emoji;
  #type = 'fruit';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = 'orange'; // #field cannot be accessed from outside the class
console.log(apple);
