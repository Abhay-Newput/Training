/* 
// Create an empty object user.
var user = {};

// Add the property name with the value John.
user.name = "John";

// Add the property surname with the value Smith.
user.lastName = "Smith";

// Change the value of the name to Pete.
user.name = "Pete";

// Remove the property name from the object.
delete user.name;

console.log(user);
*/

// function isEmpty(schedule) {
//   for (let key in schedule) {
//     return false;
//   }
//   return true;
// }

// let schedule = {};
// console.log(isEmpty(schedule)); //true

// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); //false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum = sum + salaries[key];
// }

// console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

console.log(menu);
