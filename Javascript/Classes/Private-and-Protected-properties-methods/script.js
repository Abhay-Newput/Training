/**
 // Private Properties and Methods:
 
    Private properties and methods are meant to be accessible only within the class where they are defined, 
    not from outside the class or its instances.
*/

const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    privateData.set(this, { name, age }); // Store private data in WeakMap
  }

  getName() {
    return privateData.get(this).name; // Access private data
  }

  setName(newName) {
    privateData.get(this).name = newName; // Modify private data
  }
}

const john = new Person("John", 30);
console.log(john.getName()); // Output: 'John'
john.setName("Johnny");
console.log(john.getName()); // Output: 'Johnny'

/**
 * Protected Properties and Methods:
 
    Protected properties and methods are accessible within the class where they are defined and by subclasses
    that inherit from the class, but not from outside the class hierarchy.
*/

class Vehicle {
  constructor(make, model) {
    this._make = make; // Protected property
    this._model = model; // Protected property
  }

  getMake() {
    return this._make; // Protected method
  }

  getModel() {
    return this._model; // Protected method
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this._year = year;
  }

  getYear() {
    return this._year;
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getMake()); // Output: 'Toyota'
console.log(myCar.getModel()); // Output: 'Corolla'
console.log(myCar.getYear()); // Output: 2020
