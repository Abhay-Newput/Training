// syntax : let result = condition ? value1 : value2;

let age = 5;
// let accessAllowed = age > 18 ? true : false;
// console.log(accessAllowed);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

console.log(message);
