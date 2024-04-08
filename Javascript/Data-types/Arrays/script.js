let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // 4

//-------------------------------------------------------

var styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles.splice(1, 1, "Classic");

styles.shift();

styles.unshift("Rap", "Reggae");
console.log(styles);

//--------------------------------------------------------
// let arr = [1, 2];
// console.log(arr.concat([3, 4], 5, 6));

//--------------------------------------------------------

function camelize(str) {
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color")); // 'backgroundColor'
console.log(camelize("list-style-image")); // 'listStyleImage'
console.log(camelize("-webkit-transition")); // 'WebkitTransition'

//---------------------------------------------------------------------------

function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter((item) => a <= item && item <= b);
}

var arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

//----------------------------------------------------------------------------------------------

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]

//-------------------------------------------------------------------------------------------------------

function copySorted(arr) {
  return arr.slice().sort();
}

var arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
