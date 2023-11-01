
// scope of the nested function 
function one(){
    const username = "Rais"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // this will throw error cause it is out of it's scope

    two()
}
one()



if (true) {
    const username = "Rais"
    if (username === "Rais") {
            const website = " Acer"
            console.log(`My name is ${username} im using laptop of company ${website}`);
            console.log(username + website);
    }
    // console.log(website);  // this will throw error cause it is out of it's scope
}

// console.log(username);  // this will throw error cause it is out of it's scope


//  ++++++++++++++++++++++  intresting  +++++++++++++++++++++++

//  in this function we only declare the function 
function addOne (num) {
    return num + 1
}

addOne(5)  // agar hum ese declaration se phele access kare to yeh access ho jayega 



// in this function we declare the function and hold it in a new variable
const addTwo = function(num) {
    return num + 2
}

addTwo(5)  // agar hum ese eske declaration se phele use kare to yeh error throw karega due to hoisting
