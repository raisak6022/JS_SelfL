let a = 5;
let b = a;
b = 6;
console.log(a);
console.log(b);

//Object Referencing
let obj = {
  hey: "Hello",
};

let obj2 = obj;
obj2.hey = "Bye";
console.log(obj);

//Shallow Copy
let user = {
  name: "Rais",
  address: {
    city: "Sikar",
  },
};

//Shallow copy
let user2 = { ...user };
user2.address.city = "Degana";
console.log(user);

//Deep copy
let person = {
  name: "Rais",
  address: {
    city: "Sikar",
  },
};

let deepObj = JSON.parse(JSON.stringify(person));

deepObj.address.city = "Degana"
console.log(person);
