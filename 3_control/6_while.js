/** Loop Statement
 * while (condition) {}
 * Repeat codes in {} until the condition becomes false
 */
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('Still alive!', i);
  if (i === 100) {
    break;
  }
  i++;
}

do {
  console.log('do-while: Still alive!', i);
} while (isActive);
