/**
 * JavaScript provides methods:
 ** JSON.stringify to convert objects into JSON.
 ** JSON.parse to convert JSON back into an object.
 */

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);
/* JSON-encoded object:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "spouse": null
  }
  */

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};

console.log(JSON.stringify(meetup));
/* The whole structure is stringified:
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
*/

/// JSON.parse()
// let value = JSON.parse(str[, reviver]);

// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers); //[0, 1, 2, 3]

let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log(user); //

/* 
let json = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;
*/

//Turn the object into JSON and back
let userA = {
  name: "John Smith",
  age: 35,
};
var jsonA = JSON.stringify(userA);

let user2 = JSON.parse(jsonA);

console.log(user2);

//Exclude backreferences
let room = {
  number: 23,
};

let meetupA = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetupA;
meetupA.self = meetupA;

console.log(
  JSON.stringify(meetupA, function replacer(key, value) {
    return key != "" && value == meetupA ? undefined : value;
  })
);

/* result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */
