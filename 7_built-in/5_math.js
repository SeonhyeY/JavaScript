/** Math
 * Static properties, methods
 */
console.log(Math.E); // Euler's constant, natural number e
console.log(Math.PI); // Value of Pi (π)

// Static methods
// Absolute value
console.log(Math.abs(-10)); // 10
// Round up (Ceiling)
console.log(Math.ceil(1.4)); // 2
// Round down (Floor)
console.log(Math.floor(1.4)); // 1
// Round to the nearest integer
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.7)); // 2
// Return only the integer part
console.log(Math.trunc(1.5432)); // 1

// Find the maximum and minimum values
console.log(Math.max(1, 3, 4, 7)); // 7
console.log(Math.min(2, 3, 4, 7)); // 2

// Exponentiation
console.log(3 ** 2); // 9 (Exponentiation operator, ES6)
console.log(Math.pow(3, 2)); // 9 (Older method)
// Square root
console.log(Math.sqrt(9)); // 3

// Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());
// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);
