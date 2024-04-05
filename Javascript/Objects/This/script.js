/**
 * this in JavaScript refers to the current execution context, determining the object
 * to which a function belongs or how it is called,
 * impacting its behavior and access to variables and properties.
 */

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); // undefined

/**
 * The function makeUser creates a user object with a name property set to "John" and a ref property
 * set to the global object.
 * @returns The code is returning an object with a `name` property set to "John" and a `ref` property
 * set to `this`. However, when accessing `user.ref.name`, it will return `undefined` because `this` in
 * the context of the `makeUser` function does not refer to the `user` object.
 */

//Create Calculator
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// Chaining*****

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
