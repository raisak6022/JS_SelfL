// for each

const coding = ["js", "ruby", "java", "python", "cpp"];

// by regular function
// coding.forEach(function (val){
//     console.log(val);
// })

// by using arrow function

coding.forEach((items) => {
  // console.log(items);
});


// function ko upper likha hai or use es function ka neeche kar rahe hai
function printMe(item) {
  console.log(item);
}
// coding.forEach(printMe)  // yaha par sirf humne uska refrence diya hai baaki kaam saare forEach loop khud karega


//  hum array ke items k aalava uska index number or poora array ko bhi print kara sakte hai
coding.forEach((itemsInArray, indexKaNumber, pooraArray) => {
//   console.log(itemsInArray, indexKaNumber, pooraArray);
});

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]


myCoding.forEach((values)=>{
    console.log(values.languageName);
})