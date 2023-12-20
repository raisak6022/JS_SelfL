const body = document.querySelector("body");

body.style.backgroundColor = "#3c3c3c";
body.style.color = "#fff";

// case 1.1 --> writing the function inside the setTimeout

setTimeout(() => {
  console.log("Rais");
}, 2000);

// case 1.2 --> writing the function outsidse the setTimeout
// and giving the reference without execution of any function

const love = () => {
  console.log("Rais");
};

setTimeout(love, 2000);

// case 2 --> now if i want to stop the execution of the setTimeout then we use

const changeText = () => {
  document.querySelector("h1").innerHTML = "Best Friends";
};
const changeMe = setTimeout(changeText, 2000);

// const stop = document.querySelector("#stop")

// stop.addEventListener("click", () => {
//   clearTimeout(changeMe);
//   console.log("stoped");
// });

document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(changeMe);
  console.log("stoped");
});
