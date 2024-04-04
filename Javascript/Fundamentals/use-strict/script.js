"use strict";

// Undeclared variable
x = 3.14; // Throws an error

// Duplicate parameter name
function example(a, a) {} // Throws an error

// Octal literal
let num = 071; // Throws an error
console.log(num);

// Modifying read-only properties
NaN = 5; // Throws an error
