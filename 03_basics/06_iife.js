// Immediately Invoked Function Expression (IIFE)

//  This is a regular function
// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()

// This is a iife
// This is a named iife eg: chai is the name of iife
// This is a regular function

(function chai() {
  console.log(`DB CONNECTED`);
})(); // here we put the ; explicitly

// If we want to write two iffe's then we have to put --> ; on the last of the first iffe
// This is unnamed/ normal iife eg: here there is no name
// This is a arrow function

((naam) => {
  console.log(`DB Connected two ${naam}`);
})("Rais");
