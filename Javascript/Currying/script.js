/*

Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

Currying doesn’t call a function. It just transforms it.

*/

// Curried function to calculate the sum of three numbers
function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Using the curried function to calculate the sum
const sum = currySum(2)(3)(4);
console.log(sum); // Output: 9

// Partial application of the curried function
const addFive = currySum(2)(3);
console.log(addFive(5)); // Output: 10
