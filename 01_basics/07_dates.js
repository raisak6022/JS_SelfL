// 

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());  //  locale indicates a place, environment or setting where things happen

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)  // Here 0 is a month => in js months are in index formates
// let myCreatedDate = new Date(2023, 0, 23, 23, 3)  // here is a 23 , 3 is a time means 23 baj ke 3 min hue hai 
// let myCreatedDate = new Date("2023-01-14")  
let myCreatedDate = new Date("01-14-2023")  
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() +1);  // +1 used for converting it from array to normal num
console.log(newDate.getDay() +1);  // same as upper side

console.log(`Today day is ${newDate.getDay() +1} and the time is ${newDate.getTime() +1} `);


// this is one of the method of date
newDate.toLocaleString('default',{
    weekday:"long",
})