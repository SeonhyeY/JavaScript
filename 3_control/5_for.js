/** Loop Statement
 * for (expression 1; expression 2; expression 3) {}
 * Expression 1 is executed once before the loop starts
 * Expression 2 is evaluated before each iteration; the loop continues as long as it returns true
 * Expression 3 is executed after each iteration of the loop body
 * -> It continues to run until the expression 2 evaluates to false
 */
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// Infinite Loop 💩
// for (;;) {
//   console.log('✨');
// }

// Conditional Statement control: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log('i is finally 10!');
    continue;
  }
  console.log(i);
}
