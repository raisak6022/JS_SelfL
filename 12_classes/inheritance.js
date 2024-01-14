// here we are understant that how we can take the reference by outsourcing the variable by using super()  method
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// likewise here the Teacher extends the User means that the User acts as a parent and the Teacher extendig their family by using the extends keyword

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourses() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.addCourses();
chai.logMe();
const masalaChai = new User("Afjal");
masalaChai.logMe();
// masalaChai.addCourses(); this is not called cause User not have access to the addCourses() ...

console.log(chai === User);  // false
console.log(chai === Teacher);  // false
console.log(chai === masalaChai);  // false
console.log(chai instanceof Teacher);  // true
console.log(chai instanceof User);  // true
