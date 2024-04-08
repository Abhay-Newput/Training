/**
 * Object.keys, values, entries
 * Object.keys(obj) – returns an array of keys.
 * Object.values(obj) – returns an array of values.
 * Object.entries(obj) – returns an array of [key, value] pairs.
 */

let user = {
  name: "John",
  age: 30,
};

Object.keys(user); // ["name", "age"]
Object.values(user); // ["John", 30]
Object.entries(user); // [ ["name","John"], ["age",30] ]

//Sum the properties

function sumSalaries(salary) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

//Count properties

function count(obj) {
  return Object.keys(obj).length;
}

var obj = {
  name: "John",
  age: 30,
};

console.log(count(obj)); // 2
