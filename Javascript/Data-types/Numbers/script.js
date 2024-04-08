/**
//Hex, binary and octal numbers

console.log(0xff); // Hex form of 255

let a = 0b11111111; // binary form of 255

let b = 0o377; // octal form of 255

//  toString(base)

let num = 255;

console.log(num.toString(16)); // ff : base=16 is used for hex colors

console.log(num.toString(2)); // 11111111 : base=2 is mostly for debugging bitwise operations

*/

/**
 
// Rounding

Math.floor:
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

Math.ceil:
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

Math.round:
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.

Math.trunc (not supported by Internet Explorer):
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
*/

// console.log(parseInt("284x9ab4"));

// let i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log(i);
// }

// A random number from min to max

function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(6, 9));
console.log(random(11, 15));
