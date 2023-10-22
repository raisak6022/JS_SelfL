// array 

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array methods

// myArr.push(6)
// myArr.push(7)  // yeh values ko right se insert karta hai :: array ki last value
// myArr.pop()    // yeh values ko right se nikaalta hai  :: array ki last value

// myArr.unshift(9) // yeh values ko left se insert karta hai  :: array ki first value
// myArr.shift()  // yeh values ko left se nikaalta hai  :: array ki first value

// console.log(myArr.includes(9));  // on behalf of this in can judge my value. this will give boolean value
// console.log(myArr.indexOf(3)); 
// console.log(myArr.indexOf(9));  // if value is not there and we are trying to check the index of that particular value that returns -1


// const newArr = myArr.join()  // yeh array ko string me convert kar deta hai

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);


// slice, splice :: important topic for the interview perspective

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // yeh range value se ek kam value return karega => 1, 2  ko array ki form me return kar dega & original array ke saath koi ched chaad nahi karega

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)  // yeh range value return karega => 1,2,3 ko array ki form me return karega & original array ko manipulate karta hai matlab 1,2,3 k alawa 0,4,5 hi chorega as a original array
console.log(myn2);
console.log("C ", myArr); 

