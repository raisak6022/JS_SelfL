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
