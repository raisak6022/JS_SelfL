// Explaination of the Polymorphism
// Explanation: Polymorphism is like a person who can take on different roles in different situations. In programming, it means that different classes can be treated as instances of the same class through a common interface.

class Animal {
  speak() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();
}

let dog = new Dog();
let cat = new Cat();

makeAnimalSpeak(dog); // Output: Woof!
makeAnimalSpeak(cat); // Output: Meow!
