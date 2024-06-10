// Call

function printFullName(city, country) {
  console.log(
    this.firstName + " " + this.lastName + " from " + city + " in " + country
  );
}

let name = {
  firstName: "Iron",
  lastName: "man",
};

printFullName.call(name, "New York", "USA");

let name2 = {
  firstName: "Captain",
  lastName: "America",
};

// function borrowing: we can borrow functions from other objects and use it with the data of some other object.

printFullName.call(name2, "London", "North America");

/* 
apply: first argument will be reference to this variable,
       second argument will be list to the argument we need to pass to the fuction

       ex: printFullName.apply(name2, ["London", "North America"]);

*/

/*
bind: method is same as the call method the only difference is that in place of calling the function directly, the bind method
      binds the method with a object and returns a copy of that method/function 
*/

let printMyName = printFullName.bind(name2, "London", "North America");
printMyName();
