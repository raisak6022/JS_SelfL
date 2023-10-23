// singleton
// Object.create  // es tarah se hum constructor ki help se bana sakte hai object

 
// object litrels 

const mySym = Symbol("Key1")

const jsUser = {
    name: "Rais", 
    "full name": "Rais Ahmed Khokhar",
    [mySym]: "myKey1",
    age: 20,
    location: "Jaipur",
    email: "rais@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// console.log(typeof jsUser[mySym]);


jsUser.email = "Rais@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "Rais@microsoft.com"
// console.log(jsUser["email"]);

// console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello JS User");
}
console.log(jsUser.greeting);


jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

console.log(jsUser);




// const rais = {
//     name: "Rais"
// }

// rais.name = "RAISAK"
// rais["name"] = "Rakkk"

// console.log(rais.name);