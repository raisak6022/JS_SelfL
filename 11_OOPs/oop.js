// this is just for practice of throwing new error
// try {
//     // this is also an error
//     console.log(undeclaredVariable);
// } catch (error) {
//     // throw new ReferenceError('This is a reference error')
//     error instanceof ReferenceError
//     console.log(error);
// }

// <---------------------- start ------------------------>
// This is the object literal
const user = {
  username: "Rais",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from detabase");
    // console.log(`Username: ${this.username}`);  // output: Username: Rais
    console.log(this); // output :  whole object is the current context i.y this is being used
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this   // yeh likhna etna jaruri nahi hai yeh implicitly ho jata hai. we write here for good practice
}

const userOne = new User("Rais", 6, true)
const userTwo = new User("Afjal", 55, false)
// console.log(userOne);
console.log(userOne.constructor);  // output .constructor apne aap ko referece de dega yaha par 
// console.log(userTwo);

