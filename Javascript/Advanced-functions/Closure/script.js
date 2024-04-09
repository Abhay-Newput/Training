/*
// Does a function pickup latest changes?
var name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? ----> Pete
*/

/*
// Which variables are available?
function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name); //Pete
  };
}

var name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

console.log(name); // John

*/

/*
// Are counters independent?
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1
*/

/*
//Counter object
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // ?
console.log(counter.up()); // ?
console.log(counter.down()); // ?
*/

/*
// Function in if
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // Hello, John

*/

/*
// Sum with closures
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2)); //  3
console.log(sum(5)(-1)); //  4
*/

/*
// Is variable visible?
let x = 1;

function func() {
  console.log(x); // error

  let x = 2;
}

func();
*/

/*
// Filter through function

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

*/

// Army of functions

function makeArmy() {
  let shooters = [];

  let i = 0;
  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // shooter function
      console.log(i); // should show its number
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
army[0](); // 0
army[5](); // 5
