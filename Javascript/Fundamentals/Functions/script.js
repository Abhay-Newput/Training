// Function declaration

// function showMessage(from, text) {
//   // parameters: from, text

//   let message = from + text; // local variable

//   console.log("Hello everyone....", message);
// }

// showMessage("Ann", "Hello!"); // Ann: Hello! (*)

//-----------------Rewrite the function using '?' or '||'

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

// function checkAge(age) {
//   let out = age > 18 ? true : "Did parents allow you?";

//   return out;
// }

// console.log(checkAge(4));

//-----------Function min(a, b)

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }

  // return (a<b) ? a: b
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); //-1
console.log(min(1, 1)); //1

//-----------Function pow(x,n)

function pow(a, n) {
  if (n < 0) {
    return 0;
  }
  let i = 1;
  let sum = 1;
  while (i <= n) {
    sum = sum * a;
    i++;
  }
  return sum;

  // return a**n;
}

console.log(pow(3, 2)); // 3 * 3 = 9
console.log(pow(3, 3)); // 3 * 3 * 3 = 27
console.log(pow(1, 100)); // 1 * 1 * ...* 1 = 1
