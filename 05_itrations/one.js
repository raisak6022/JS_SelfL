// for loops

// case I  for the purpose of how does the for loop executes
for (let i = 0; i <= 10; i++) {
  const element = i;
  if(element == 5) {
    // console.log("5 is the best number");
  } 
//   console.log(element);
}


// case II  for the purpose of how the nested loop works and making the tables with the help of nested loop
// nested for loop very intrestingly explaination
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //    console.log(`Inner loop value: ${j} and outer loop ${i}`);
        // console.log( i + '*' + j + ' = ' + i*j );
        
    }
    
}


// case III  for the purpose of how we can itrate the array with the help of for loop

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// case IV 
// break and continue

// case 1.1
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Values of i is ${index}`);
    
// }

// case 1.2

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Values of i is ${index}`);
    
}