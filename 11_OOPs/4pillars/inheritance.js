// Explaination of the Inheritance
// Explanation: Inheritance is like a parent passing down traits to their child. In programming, a class can inherit properties and methods from another class. The class that is being inherited from is called the parent or superclass, and the class that inherits is called the child or subclass.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(this.name + " barks.");
  }
}

let dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.
