//syntax:

// let func = (arg1, arg2, ..., argN) => expression;
/*
let sum = (a, b) => a + b;
console.log(sum(4, 5));

let sayHi = () => console.log("Hello!");
sayHi();

// Example
let age = 18;

let welcome =
  age < 18 ? () => console.log("Hello!") : () => console.log("Greetings!");

welcome();
*/
/*
//Multiline arrow functions

let sum = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

console.log(sum(1, 2)); // 3

*/

/*

Rewrite with arrow functions
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

*/

//my-solution
// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask(
// 'Do you agree?',
// () => console.log('You agreed'),
// () => console.log('You interrupted execution'),
// );

//info solution

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );
