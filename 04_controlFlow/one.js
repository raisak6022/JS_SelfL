
// conditionals
// if - else - ifelse

// case I  for the purpose of how the if statement evaluted 
const isUserLoggedIn = true;
const temprature = 23;



// if (temprature === 23) {
//   console.log("less than 23");
// } else {
//   console.log("temprature is greater than 50");
// }
// <, >, <=, >=, ==, !=, ===, !==



// case II  for the purpose of scope 
const score = 200


// if (score > 100) {
//     const power = "Fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);



// case III   for the purpose of shorthand notation

// const balance = 1000

// if (balance > 500) console.log("Test"), console.log("test2");




// case IV for the purpose of checking more conditions

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 700");
// } else if (balance < 900) {
//     console.log("less than 700");
// } else{
//     console.log("less than 1200");
// }


// case V for the purpose of AND and OR statements 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggiedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggiedInFromEmail ) {
    console.log("User logged in");
}