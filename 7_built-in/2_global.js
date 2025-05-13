/** Global properties/functions
 * These are built into the JavaScript runtime and accessible globally
 * without importing or referencing an object.
 *
 * Note: Some are constants (Infinity, NaN), others are functions (parseInt, eval, etc.)
 */
console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// WARNING: eval can execute arbitrary code and should be avoided in production.
eval('const num = 2; console.log(num)');

console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // flase

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI is a broader term that includes URL)
// URLs must consist of ASCII characters only
// Non-ASCII characters like Korean or special symbols must be escaped
const URL = 'https://네이버.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

// For partial URLs, use encodeURIComponent instead
const part = '네이버.com';
console.log(encodeURIComponent(part));
