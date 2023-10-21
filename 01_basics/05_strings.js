const name = "Rais"
const loveCount = 50

// console.log(name + loveCount + "Great");  // this is concatinated
// don't use this method nowadays


// so nowadays we are use this method known as string interpollation
console.log(`Hello my name is ${name} and my loveCount is ${loveCount}`);



const gameNew = new String('hitesh-hc-com')
// console.log(gameNew[0]); 
// console.log(gameNew.__proto__);

// console.log(typeof gameNew);  // type of sting is object

// console.log(gameNew.length);
// console.log(gameNew.toUpperCase());

console.log(gameNew.charAt(2));
console.log(gameNew.indexOf('t'));

const newString = gameNew.substring(0,3)  // yaha par hum negative values nahi de sakte hai
console.log(newString)

const anotherString = gameNew.slice(-2,3)  // yah par hum negative values de dakte hai
console.log(anotherString);

const newStringOne = "    ra  is   "
console.log(newStringOne);
console.log(newStringOne.trim());  // it is used for removing the white space from the string except between


const url = "https://hitest.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('hiteesh'));


console.log(gameNew.split('-'));