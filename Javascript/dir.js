const obj = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Display the properties of the object using console.dir()
console.dir(obj);
console.log("log", obj);
