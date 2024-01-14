// in this example we see why that why the constant valuw of pi is not writable/ changeable eg. of pi 
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5
//  console.log(Math.PI)

// const myNewObject = Object.create(null)

const chai = {
  name: "Raju",
  price: 123,
  isAvailable: true,

  lalaji: function () {
    console.log(`kai che bhaa`);
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} = ${value}`);
  }
}

// Key Points:
// !== ensures strict inequality, preventing unintended function calls.
// It's crucial for filtering object properties based on their types.
// In this example, it isolates non-function properties for logging.

// Beyond this example:
// !== is versatile for various comparisons:
// Checking if a value is not a number: if (value !== Number)
// Verifying if an object is not null: if (obj !== null)
// Preventing unintended string conversions: if (num !== '0')
