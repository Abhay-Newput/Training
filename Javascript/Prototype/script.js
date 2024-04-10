/*
In JavaScript, prototype is a fundamental concept related to how objects and inheritance work. 
Every JavaScript object has a prototype, which is either null or refers to another object. 
The prototype property allows objects to inherit properties and methods from other objects.


let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // animal becomes the prototype (or parent) of rabbit.
// This means rabbit inherits properties from animal.

console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true
*/

/*

// Working with prototype
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // ? (1)  // true, taken from rabbit.

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2)  // null, taken from animal.

delete animal.jumps;

console.log(rabbit.jumps); // ? (3)  // undefined, there’s no such property any more.

*/

/*
// Searching algorithm

1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: 
pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), 
and bed.glasses should be 1 (found in head).

2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};

console.log(pockets.pen); //3
console.log(bed.sheet); //1
console.log(head.money); // undefined
console.log(table.pillow); //undefined

*/

/*
let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); // This invokes animal.eat() with `this` pointing to `rabbit`
console.log(rabbit.full); // Output: true
*/

/* 
// Why are both hamsters full?
let hamster = {
  stomach: [],

  eat(food) {
    // this.stomach.push(food);
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple

*/
