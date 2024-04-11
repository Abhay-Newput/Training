/**
 
* Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.

*Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance, 
  but mixins can be implemented by copying methods into prototype.

*We can use mixins as a way to augment a class by adding multiple behaviors,
 like event-handling as we have seen above.

*Mixins may become a point of conflict if they accidentally overwrite existing class methods. 
 So generally one should think well about the naming methods of a mixin, to minimize the probability of that happening.
*/

/*

Mixins are a software design pattern in object-oriented programming that involves combining 
 (or mixing in) multiple classes or objects to create a new class with combined functionality. 
 In JavaScript, mixins are typically implemented using object composition rather than traditional class-based inheritance.

Mixins:

Mixins are a way to enhance the functionality of objects by combining methods and properties from multiple sources 
(other objects or classes) into a single object. 

This allows for code reuse and flexibility in creating objects with specific sets of behaviors.

*/

// Define mixin objects
const canEat = {
  eat() {
    console.log(`${this.name} is eating.`);
  },
};

const canSleep = {
  sleep() {
    console.log(`${this.name} is sleeping.`);
  },
};

// Create a new class by mixing in functionality from mixins
class Animal {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Animal.prototype, canEat, canSleep); // Mixin canEat and canSleep into Animal prototype

// Create instances of Animal with mixed-in behaviors
const cat = new Animal("Cat");
cat.eat(); // Output: Cat is eating.
cat.sleep(); // Output: Cat is sleeping.
