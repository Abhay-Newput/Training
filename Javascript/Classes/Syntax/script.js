/**
 * JavaScript classes are a powerful feature that simplifies and enhances object-oriented programming in JavaScript 
 * 
 * Classes provide a more familiar and structured way to create constructor functions and manage inheritance in JavaScript.
 * 
 * JavaScript's classes are still based on prototypes and constructor functions

 * syntax
 
class ClassName {
  constructor( constructor parameters ) {
    // Constructor function
}

method1( parameters ) {
  // Method 1 definition
}

method2( parameters ) {
  // Method 2 definition
}

// More methods...
}

*/

/*
Constructor:

The constructor method is a special method used for initializing new objects created with the class.
It's called automatically when you instantiate a new object using new ClassName().
You can pass parameters to the constructor to initialize object properties.


Methods:

Methods are functions defined inside the class body.
They define the behavior of class instances and can be called on instances created from the class.
Methods can accept parameters and operate on the instance data using this.

*/

// Example of Using a Class:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  celebrateBirthday() {
    this.age++;
    console.log(
      `Happy birthday, ${this.name}! You are now ${this.age} years old.`
    );
  }
}

// Creating instances of the Person class
const john = new Person("John", 30);
const alice = new Person("Alice", 25);

// Calling methods on class instances
john.greet(); // Output: Hello, my name is John and I am 30 years old.
alice.greet(); // Output: Hello, my name is Alice and I am 25 years old.

john.celebrateBirthday(); // Output: Happy birthday, John! You are now 31 years old.
