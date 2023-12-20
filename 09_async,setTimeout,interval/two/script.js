// case 1.1 --> this how we write the setInterval and we are giving it to the handler
//
// setInterval(() => {
//   console.log("hello", Date.now());
// }, 1000);
//
// case 1.2 --> now we are writing the setInterval
// and we are declaring the function outside the setInterval
// then here we are ginving the reference to the function

let intervalID;
const sayDate = (str) => {
  console.log(str, Date.now());
};

document.querySelector("#start").addEventListener("click", (e) => {
//   setInterval(sayDate, 2000, "Hello");
//   e.stopPropagation()
  intervalID = setInterval(sayDate, 2000, "Hello"); // eske ander thir parameter bhi hota hai
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalID);
});
