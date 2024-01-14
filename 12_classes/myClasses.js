// ES6 - this has been introduced in ES6 before we are using prototyple inharitance 

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chaaa = new User("Chai", "chai@gmail.com", "123");

console.log(chaaa.encryptPassword());
console.log(chaaa.changeUsername());

// behind the scene as we discussed earlier in prototyple behaviour of javascript

function UserTwo(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

UserTwo.prototype.encryptPassword = function () {
  return `${this.password} hello`;
};

UserTwo.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};


const chai = new UserTwo("Chawadi", "chaa@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());