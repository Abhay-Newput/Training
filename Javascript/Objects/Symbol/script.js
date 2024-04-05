/**
 * Symbols are used to create unique keys for object properties,
 * preventing accidental name collisions and ensuring that each property key is distinct.
 */

// const mySymbol = Symbol();
const mySymbol = Symbol("mySymbol");

const obj = {};
obj[mySymbol] = "value";

console.log(obj[mySymbol]);
