// const tinderUser = new Object()  // yeh ek singleton object hai 



// yeh non-singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// nested object 

const regularUser = {
    email: "some@google.com",
    fullname: {
        userFullname: {
            firstname: "Rais",
            lastname: "Ahmed"
        }
    }
}
console.log(regularUser.fullname?.userFullname.firstname); // this is how we access the value from nested object 


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// console.log(obj3);
// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);

const obj3 = { ...obj1, ...obj2}  // we mostly use this syntax
// console.log(obj3);


// humare paas jyadatar yeh es tarah se work aata hai
const users = [ 
    {
        id: 1,
        email: "Rais@gmail.com"
    },
    {
        id: 1,
        email: "Rais@gmail.com"
    },
    {
        id: 1,
        email: "Rais@gmail.com"
    },
    {
        id: 1,
        email: "Rais@gmail.com"
    },
    {
        id: 1,
        email: "Rais@gmail.com"
    },
    {
        id: 1,
        email: "Rais@gmail.com"
    },
    {
        id: 1,
        email: "Rais@gmail.com"
    },
    {
        id: 1,
        email: "Rais@gmail.com"
    },
    {
        id: 1,
        email: "Rais@gmail.com"
    },
]

users[1].email
// console.log(users[1].email);


 console.log(tinderUser);

 console.log(Object.keys(tinderUser));  // hum keys ko access kar sakte hai with the help of this method and it returns array 
 console.log(Object.values(tinderUser));  // hum values ko access kar sakte hai with the help of this method and it returns array  
 console.log(Object.entries(tinderUser));  // yaha par hum key or value dono ko convert kar sakte hai ek array me 

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // yeh method batata hai ke yeh islogged in tinderuser ke ander hai ya nahi
