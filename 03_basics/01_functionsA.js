function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("I");
  console.log("S");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result

  return number1 + number2; // we can also write return in this way....
}

// addTwoNumbers() // output: NaN because we have to pass an argument
// addTwoNumbers(1,2) // output: 3++++
// addTwoNumbers(1, "4")
// addTwoNumbers(1, "a")
// addTwoNumbers(1, null)

const returnResult = addTwoNumbers(1, 2);
// console.log("Result: ", returnResult);

// function loginUserMessage(username) {
//   if(username === undefined){
//     console.log("Please enter a username");
//     return  // agar argument undefined hai to yeh execute ho jayega or if ke bahar waala return kaam hi nahi karega
//   }
//   return `${username} just logged in`;  // agar argument undefined nahi hua to yeh waala return execute hoga
// }

function loginUserMessage(username = " abc") {  // mai es me default agrument bhi pass kar sakta hoon agar koi user kuch vvalue pass hi nahi kare to
  if (!username) {  //  !username matlab ki yeh agar username undefined hua to ese evaluate karee
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Rais"));
console.log(loginUserMessage());  // agar hum yaha par koi value pass kar de to woh print ho jayegi default set ki hui pass naahi hogi jo humne line no 38 me ki hai
