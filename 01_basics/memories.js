
// this is the example of the stack and heap memory 
// stack memory => is used in premitive datatypes
// heap memory => is used in reference (non-premitive) datatypes

let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}
let userTwo = userOne

userTwo.email = "hitest@google.com"

console.log(userOne.email);
console.log(userTwo.email);