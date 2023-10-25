//  aisi koi situation aati hai jahhaa par humare pass bahut saare arguments ek saath aayenge tab hum karte hai yeh

function calculateCartPrice(val1, val2, ...num1){
    // console.log(val1);
    // console.log(val2);
    // console.log(num1);
    return num1
}

// console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200, 400, 500, 600));  // neeche hai explaination
// agar humne yahaa par 4 argument pass kiye hai to or upper maine 2 parameter pass kiye hai jinme se 2 normal parameter h or ek parameter me spread operator ka use kiya hai to =>
// 4 me se aage wale do to normal parameter me jayenge or baaki ke array ki form me spread operator ki help se aayenge 


// object ko function me kaise pass kiya jata hai or kaise use kya jata hai

const user = { 
    username: "Rais",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// hum yaha par direct object bhi pass kar sakte hai
handleObject({
    username: "Sam",
    price: 399
})

// array ko function me kaise pass kiya jata hai or kaise use kya jata hai


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]  // yaha par myNewArray ke aage nahi likhna hai k [] laga ke 0 ya 1st index ki value kya hai kyunki woh generic naam hai woh kuch bhi ho sakta tha upper. humko sirf dhyaan dena hi ke humare pass me kya argument aa rahi hai 
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500, 600])); // hum esko valriable me daal ke bhi pass kar sakte hai


