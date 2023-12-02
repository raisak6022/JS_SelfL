// switch 

// this is the basic syntax of switch case 
// if we cannot write break into the syntax then all the cases are executed except default
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// case I   for the purpose of the number 
// const month = 3 
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("Default case match");
//         break;
// }




//  case II for the purpose of using string instead of the number
const month = "mar"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("february");
        break;
    case "mar":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("Default case match");
        break;
}

