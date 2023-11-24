const user = {
    username: "Rais ak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username},  welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// By how many types we can declare the function

// type 1
// function chai() {
//     let username = "Rais"
//     console.log(this.username);
// }
// chai()

// In this case, when you call chai() directly, without being part of an object or using any special binding,
//  this inside chai will refer to the global object (window in a browser environment or global in Node.js). 
// Since there is no property named username on the global object, you will see undefined when trying to log this.username.


// type 2
// const chai = function() {
//     let username = "Rais"
//     console.log(this.username);
// }

// chai()



// type 3
const chai = () => {
    let username = "Rais"
    console.log(this);
}
chai()



// This is the basic arrow function     () => {}
// const variableName = (parameterss) => {}

// Types of declaring arrow functions

// Type 1 --> This type is called as explicit return arrow function
// {} <-- yeh likha to return likhna hi padega

const addTow = (num1, num2) => {
    return num1 + num2
} 
console.log(addTow(1,2));


// Type 2 --> This type is called as implicit return arrow function
// () <-- yeh likha to return nahi likhna padega

// const addThree = (no1, no2) => no1 + no2
// console.log(addThree(1,2));


// Type 2.1  --> This is also correct
// const addThree = (no1, no2) => (no1 + no2)
// console.log(addThree(1,2));


// Type 2.2  --> if we want to return the object
const addThree = () => ({gmailName: "Rais@gmail.com"})
console.log(addThree());


