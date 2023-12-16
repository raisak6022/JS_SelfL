const clock = document.getElementById("clock");

// console.log(clock)

const love = () => {
  const date = new Date();
//   console.log(date.toLocaleTimeString);
    clock.innerHTML = date.toLocaleTimeString();
};

setInterval(love, 1000);
