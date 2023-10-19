let score = null;

console.log(typeof score);
console.log(typeof (score));  // esko as a method dekh rahe hai 


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
// NaN => not a number this is because of the number is not a proper number which we are printing
// but NaN ka type hia woh number hi hai



// Notes of basic conversion 
/*
"33" => 33
"33abc" => NaN
true =>1; false => 0
null => 0
undefined => NaN

*/


let isLoggedIn = "Rais"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// boolean conversion
/*
 1 => true;
 0 => false;
 "" => false;
 "Rais" => true;
*/


let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);