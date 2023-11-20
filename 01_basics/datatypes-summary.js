// primitive
 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3  // number

const isLoggedIn = false  // boolean
const outSideTemp = null  // null
let userEmail;  // undefined

const id  = Symbol('123') // Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);  // false show karega because humne yaha par symbol ka use kiya hai


const bigNumber = 3325541654616543518654n  // bigInt


// Reference  (Non - primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]   // Array


// object
let muobj = {
    name: "Rais",
    age: 22,
}


// function
const myFunction = function() {
    console.log("hello g");
}


// typeChecking : this is how we check the type of any data

console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3  // for more information visit this site
