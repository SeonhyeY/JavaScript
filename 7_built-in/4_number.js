// Number
const num1 = 123;
const num2 = new Number(123); // not recommended
console.log(num1);
console.log(num2);

console.log(Number.MAX_VALUE); // Largest possible number
console.log(Number.MIN_VALUE); // Smallest positive number (closest to zero)
console.log(Number.MAX_SAFE_INTEGER); // Largest integer accurately represented
console.log(Number.MIN_SAFE_INTEGER); // Smallest safe integer
console.log(Number.NaN); // Not a Number
console.log(Number.NEGATIVE_INFINITY); // Negative infinity
console.log(Number.POSITIVE_INFINITY); // Positive infinity

if (Number.isNaN(num1)) {
}

// Exponential notation (used for very large or very small numbers, powers of 10)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2

// Round to the nearest integer and convert to string
const num4 = 1234.12;
console.log(num4.toFixed()); // '1234'
console.log(num4.toString()); // '1234.12'
console.log(num4.toLocaleString('ar-EG')); // ١٬٢٣٤٫١٢: Arabic formatting

// Round to the specified number of significant digits
console.log(num4.toPrecision(5)); // 1234.1
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // If digits are insufficient, uses exponential: '1.2e+3'

console.log(Number.EPSILON); // Smallest difference between 1 and the next larger representable number
if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}
const num = 0.1 + 0.2 - 0.2; // You’d expect 0.1, but...
console.log(num); // 0.10000000000000003 — due to floating-point precision error

function isEqual(original, expected) {
  // return original === expected
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // true
