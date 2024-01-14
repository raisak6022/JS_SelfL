class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  // by using static keyword we are declaring that it was not used by anyone or you may not have direct acces to this createId() function
  static createId() {
    return `123`;
  }
}

const rais = new User("Rais");
// console.log(rais.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("iphone", "i@phone.com");

iphone.logMe();

// console.log(iphone.createId());
