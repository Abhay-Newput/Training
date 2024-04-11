/**
 * Static properties are properties that are shared among all instances of a class.
    They are defined using the static keyword inside the class declaration.
*/

class Circle {
  static pi = 3.14;

  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Circle.pi * this.radius * this.radius;
  }
}

console.log(Circle.pi); // Output: 3.14

const circle1 = new Circle(5);
console.log(circle1.getArea()); // Output: 78.5

/**
 * Static methods are methods that are called on the class itself, rather than on instances of the class. 
   They are also defined using the static keyword inside the class declaration.
*/

class MathUtils {
  static multiply(a, b) {
    return a * b;
  }

  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.multiply(5, 3)); // Output: 15
console.log(MathUtils.square(4)); // Output: 16
