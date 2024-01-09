// const username = "Hello      ";

// String.prototype.ass = function () {
//   console.log(this.trim().length);
// };
// username.ass();

let myHeros = ["Thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  gerSpiderPower: function () {
    console.log(`spidy power is : ${this.spiderman}`);
  },
};
// giving the power to the objects in this case and if we have given power to the object then all the other items can access the power of the object (all means: Array, Function, String and Object itself )
Object.prototype.rais = function () {
  console.log("Rais is present in all Objects");
};

// in this case we are giving power to the array itself now this cannot share it's power to anone except itself
Array.prototype.love = function () {
  console.log("Hey the power is given to the array only");
};

// heroPower.love()  //--> if we calling it here then it will not gonna work showing us an error
heroPower.rais();
myHeros.love();

// inheritance

const User = {
  username: "Rais",
  passKey: 123,
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: false,
  __proto__: TeachingSupport
};

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // TeachingSuppot ko hum access de dete hai k aap saari property access kar lo Teacher ki bhi


let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Rais".trueLength()
"iceTea".trueLength()