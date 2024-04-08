/* 
// str.indexOf

// let str = "Widget with id";

// console.log(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
// console.log(str.indexOf("widget")); // -1, not found, the search is case-sensitive

// console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

// console.log(str.indexOf("id", 2)); // 12

let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

*/

/** 
 
// includes, startsWith, endsWith

console.log("Widget with id".includes("Widget"));
console.log("Hello".includes("Bye"));

// Getting a substring
let str = "stringify";
console.log(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0
console.log(str.slice(2)); // 'ringify', from the 2nd position till the end

// start at the 4th position from the right, end at the 1st from the right
console.log(str.slice(-4, -1)); // 'gif'

*/

/*
// str.substring(start [, end])

let str = "stringify";

// these are same for substring
console.log( str.substring(2, 6) ); // "ring"
console.log( str.substring(6, 2) ); // "ring"

// ...but not for slice:
console.log( str.slice(2, 6) ); // "ring" (the same)
console.log( str.slice(6, 2) ); // "" (an empty string)


// str.substr(start [, length])

let str = "stringify";
console.log(str.substr(2, 4)); // 'ring', from the 2nd position get 4 characters

*/
/*
 * str.codePointAt(pos)
 * Returns a decimal number representing the code for the character at position pos:
 

console.log("Z".codePointAt(0)); // 90
console.log("z".codePointAt(0)); // 122
console.log("z".codePointAt(0).toString(16)); // 7a (if we need a hexadecimal value)

// console.log("abc ".codePointAt(3));
*/

/**
 * Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
 *
 * ucFirst("john") == "John";
 */
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("abc"));
console.log(ucFirst("hehe"));
console.log(ucFirst("come"));

/**
 * Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
 * The function must be case-insensitive:

 */
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes("viagra") || str.includes("xxxxx")) return true;
  else return false;
}

console.log(checkSpam("buy ViAgRA now")); // true
console.log(checkSpam("free xxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false

/**
 * Truncate the text
  **Create a function truncate(str, maxlength) that checks the length of the str and, 
    if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
    to make its length equal to maxlength.

*/

function truncate(str, len) {
  if (str.length >= len) {
    str = str.slice(0, len - 1) + "...";
    return str;
  }
  return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); //"What I'd like to te…"
console.log(truncate("Hi everyone!", 20)); //"Hi everyone!"

/**
 * Extract the money
 * alert( extractCurrencyValue('$120') === 120 ); // true
 */

function extractCurrencyValue(str) {
  str = str.slice(1);
  return str;
}

console.log(extractCurrencyValue("$120"));
