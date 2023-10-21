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
// console.log(hundreds.toLocaleString('en-IN')); // converts into units like ekaii dhaaiii sekda hazar in india standard

// Number.MAX_SAFE_VALUE => yeh batata hai ki kitne bade no tak value jayegi (range)
// Number.MIN_SAFE_VALUE  => same as max

// ++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(4));
// console.log(Math.min(4,5,9,7,1,2,45,65,));
// console.log(Math.max(4,5,9,7,1,2,45,65,));

console.log(Math.random());  // this method is used for grnerating random numbers
console.log(Math.random() * 10);  // *10 is used to shifting the no. towards left
console.log((Math.random() * 10) + 1);  // +1 is used to avoid 0
console.log(Math.floor(Math.random() * 10) + 1); // floor is used for avoiding the decimals part



// if we want to set range from (for e.g. 10 to 20)
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 