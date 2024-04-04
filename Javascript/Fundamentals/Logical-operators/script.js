// || (OR)

//result = a || b;

console.log(0 || 3);
console.log("hi" || "hello");
console.log("" || "hello");

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log("The office is closed.");
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

//&& (AND)
//result = a && b;

let hours = 12;
let minute = 30;

if (hours == 12 && minute == 30) {
  console.log("The time is 12:30");
}

//! (NOT)
//result = !value;

var result = !true;

//Tasks
console.log(null || 2 || undefined); //2

console.log(console.log(1) || 2 || console.log(3));

console.log(1 && null && 2);

console.log(console.log(1) && 2 && console.log(3));

let user = prompt("Kon hai....");

// if (user.toLowerCase() == "admin") {
//   let pass = prompt("Password boliye...");
//   if (pass == "admin") {
//     alert("Maallllikkkkkk");
//   } else {
//     alert("sahi password bata.....");
//   }
// } else {
//   alert("Nikal yaha se");
// }
