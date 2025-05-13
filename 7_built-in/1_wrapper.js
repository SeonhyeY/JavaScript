/** Wrapper Object
 * Converts primitive values to corresponding built-in objects when necessary.
 * For example, JavaScript automatically wraps primitive values with objects
 * (like Number or String) to allow access to built-in methods.
 */
const number = 123;
console.log(number.toString());

const text = 'text'; // primitive type: string
console.log(text);
console.log(text.length); // treated as a String object
text.trim();
