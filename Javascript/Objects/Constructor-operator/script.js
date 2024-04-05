/**
 * new before a constructor function,
 * it creates a new object, sets the this keyword to refer to that object within the constructor function
 */
/*

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 30);
console.log(john.name); // Output: "John"
console.log(john.age); // Output: 30

*/

/**
 * When a function is executed with new, it does the following steps:
 ** A new empty object is created and assigned to this.
 ** The function body executes. Usually it modifies this, adds new properties to it.
 ** The value of this is returned.
 */

// Calculator

function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

//Accumultor
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
