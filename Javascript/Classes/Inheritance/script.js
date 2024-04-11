/*
Class Inheritance:

JavaScript classes also support inheritance through the extends keyword, 
allowing you to create subclasses (child classes) that inherit from a parent class.
*/

//Normal Class

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

//Inheritance ----------------------------------------------------------------------------->>>>>>>>>>>>>>

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent class constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying hard for exams.`);
  }
}

// Creating instances of the Student class
const lucy = new Student("Lucy", 18, "12th grade");

lucy.greet(); // Inherited method from Person class
lucy.study(); // Own method defined in Student class
lucy.celebrateBirthday();
