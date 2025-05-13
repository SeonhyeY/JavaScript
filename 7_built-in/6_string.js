// String
const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj, text);
console.log(text.length); // 12

console.log(text[0], text[1], text[2]);
// text[0] returns the character at index 0 (same as charAt()), but charAt() returns an empty string instead of undefined if the index is out of range.
console.log(text.charAt(0), text.charAt(1), text.charAt(2));

console.log(text.indexOf('l')); // 2
console.log(text.lastIndexOf('l')); // 9

// includes() is case-sensitive
console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false, case-sensitive
console.log(text.includes('Wo')); // true

// startsWith() and endsWith() are also case-sensitive
console.log(text.startsWith('he')); // false, case-sensitive
console.log(text.startsWith('He')); // true
console.log(text.endsWith('!')); // true

console.log(text.toUpperCase()); // 'HELLO WORLD!'
console.log(text.toLowerCase()); // 'hello world!'

// slice() allows negative indexes, substring() treats negative indexes as 0
console.log(text.substring(0, 2)); // 'He'
console.log(text.slice(2)); // 'llo World!'
console.log(text.slice(-2)); // 'd!'

const space = '               space         !';
console.log(space);
console.log(space.trim()); // 'space         !'

const longText = 'Get to the, point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the,', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ]
console.log(longText.split(',')); // [ 'Get to the', ' point' ]
console.log(longText.split('t')); // [ 'Ge', ' ', 'o ', 'he, poin', '' ]
