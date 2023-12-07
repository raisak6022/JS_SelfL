// reduce operation 

const myNums = [1, 2, 3]


// case I --> by using regular function
// const myTotal = myNums.reduce( function (acc , currval) {
//     console.log(`acc: ${acc} and curval: ${currval}`);
//     return acc + currval
// }, 0)


// case II --> by using arrow function

const myTotal = myNums.reduce( (acc, curval) => (acc + curval) , 0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Web Dev",
        price: 5999
    },
    {
        itemName: "Moblile Dev",
        price: 4999
    },
    {
        itemName: "Love Dev",
        price: 3999
    },
    {
        itemName: "Game Dev",
        price: 7999
    },
    {
        itemName: "Web Designing Coure",
        price: 9999
    }
]

const shopTotal = shoppingCart.reduce((acc, totalRs) => (acc + totalRs.price), 0)

console.log(shopTotal);