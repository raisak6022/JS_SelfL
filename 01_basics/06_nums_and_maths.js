// yah par number automatically define hua haiki yeh number type ka hai
const score = 400;
// console.log(score);

// now we are explecitly declaring number by using this method
// yaha par number specifically cast kiya hai ki yeh number hai (Specially declaring the number)
const balance = new Number(100);
// console.log(balance);
//
// console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  // decimal no. k baad me kitne zeo dikhane hai 

const otherNumber = 129.8549;
// console.log(otherNumber.toPrecision(3));  // yeh value ko precised form me batata hai

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // seprates the numbers into , in us standard by default
// console.log(hundreds.toLocaleString('en-IN')); // converts into units like ekaii dhaaiii sekda hazar in india standard

// Number.MAX_SAFE_VALUE => yeh batata hai ki kitne bade no tak value jayegi (range)
// Number.MIN_SAFE_VALUE  => same as max

// ++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));  // yaha par negative values ko positive me change kar deta hai
// console.log(Math.round(4.3));  // yeh humne roundOff values deta hai
// console.log(Math.ceil(4.3));   // ceiling wali value top value hi leti hai after decimal chahe kitna chota decimal hi kyun na ho
// console.log(Math.floor(4.9));  //  floor wali value hi leta hai yeh after decimal chahe kitna bhi bada no. kyun na ho
// console.log(Math.sqrt(4));
// console.log(Math.min(4,5,9,7,1,2,45,65,));
// console.log(Math.max(4,5,9,7,1,2,45,65,));

console.log(Math.random());  // this method is used for grnerating random numbers
console.log(Math.random() * 10);  // *10 is used to shifting the no. towards left
console.log((Math.random() * 10) + 1);  // +1 is used to avoid 0
console.log(Math.floor(Math.random() * 10) + 1); // floor is used for avoiding the decimals part
console.log(Math.floor((Math.random() * 10) ));  // if i want 0-9 then i do this


// if we want to set range from (for e.g. 10 to 20)
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 