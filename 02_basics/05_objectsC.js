// de-structuring array ki bhi hoti hai or object ki bhi 
// heeere we are seeing the destructuring of objects
// v.v.v.v IMP


const course = { 
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor



const {courseInstructor: instructor, price:rs , coursename: naam} = course

// console.log(courseInstructor);
console.log(instructor);
console.log(rs);
console.log(naam);


// json 
// {
//     "name": "Rais",
//     "coursename": "js in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {},
    {}
]

// const navbar = ({company}) => {

// }

// navbar(company = "Rais")  


// vvvvv imp
// Basic array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]