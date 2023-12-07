// for of loop

// ["", ""]
// [({}, {}, {})]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { 
    // console.log(num);
}

const greetings = "hello ji"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// maps 

const map = new Map()
map.set('IN', "India")
map.set('UN', "United Nation")
map.set('UK', "United Kingdom")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")  // yeh print nahi hoga cause maps uniqueness k liye jane jate hai


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman',
    game3 : 'GTA'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

