/** Nullish Coalescing Operator
 * ES11 (ECMAScript 2020)
 * ??
 *
 * The `??` operator returns the right-hand side value only if the left-hand side is `null` or `undefined`.
 * It does **not** treat other falsy values like 0, '', or false as nullish.
 */

let num = 0;

// Using || assigns the right-hand value if the left-hand value is *falsy* (false, 0, '', null, undefined)
console.log(num || '-1'); // '-1'

// Using ?? assigns the right-hand value only if the left-hand value is *null* or *undefined*
console.log(num ?? '-1'); // 0
