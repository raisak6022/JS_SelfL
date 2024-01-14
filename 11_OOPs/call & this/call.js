function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username , email , password) {
    SetUsername.call(this, username)  // imp line for this file

    this.email  = email
    this.password = password
}

const chai  = new createUser("chai", "chai@fb" , "123")
console.log(chai);






