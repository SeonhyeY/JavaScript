// Quiz 1
// Create a counter
// Initialize it with a value 0 or greater, then make it possible to increment the number one by one
// Create a Counter class
class Counter {
  #value;
  constructor(initNum) {
    if (isNaN(initNum) || initNum < 0) {
      this.#value = 0;
    } else this.#value = initNum;
  }

  count = () => {
    this.#value++;
  };
  get value() {
    return this.#value;
  }
}

const counter = new Counter(-3);
counter.count(); // 1
counter.count(); // 2
counter.count(); // 3
console.log(counter.value);
