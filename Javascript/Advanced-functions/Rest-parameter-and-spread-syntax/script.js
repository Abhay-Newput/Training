/*
Rest parameters:  allow you to represent an indefinite number of arguments as an array within a function definition. 
This syntax is denoted by ... followed by a parameter name, which gathers all remaining arguments into an array.
*/

function myFunction(...restParams) {
  console.log(restParams);
}

myFunction(1, 2, 3, 4); // Output: [1, 2, 3, 4]
myFunction("a", "b", "c"); // Output: ['a', 'b', 'c']

/*
Spread syntax:  allows an iterable (such as an array) to be expanded into individual elements. 
It's used in function calls, array literals, and object literals.
*/
// Spread in function calls
const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3

// Spread in array literals
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Output: [1, 2, 3, 4, 5]

// Spread in object literals (from ES2018)
const obj1 = { foo: "bar", x: 42 };
const obj2 = { ...obj1, y: 17 }; // Output: { foo: 'bar', x: 42, y: 17 }
console.log(...arr2);
