// let user = { name: "John" };

// let admin = user;
/*
let user = { name: "John" };

let admin = user;

admin.name = "Pete"; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
 */

/* 
// Cloning and merging, Object.assign----------------

let user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object

//const originalObject = { a: 1, b: 2 };  ********
//const clonedObject = { ...originalObject }; ************

// const originalObject = { a: 1, b: 2 };   **************
// const clonedObject = Object.assign({}, originalObject);  *************   

*/

/* 
//Object.assign(dest, ...sources)
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
// alert(user.name); // John
// alert(user.canView); // true
// alert(user.canEdit); // true

console.log(user);
*/

/**
 * 
//Structured Clone
const originalObject = {
    a: 1,
    b: {
        c: 2,
    },
};

const clonedObject = structuredClone(originalObject);

*/
