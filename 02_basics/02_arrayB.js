const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)  // yeh existing array pe hi push karta hai

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // yeh return karta hai new array & properly merge kar ke deta hai
// console.log(marvel_heros);
// console.log(allHeros);



const all_new_heros = [...marvel_heros, ...dc_heros];  // this is a sperad operator works same as concat but here we can add 2 or more values 

console.log(all_new_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);  // yeh array ko ek single array me convert karne ke kaam aata hai 
console.log(real_another_array);



console.log(Array.isArray("Rais"));  // yeh batata hai ki particular thing is array or not
console.log(Array.from("Rais"));  // yeh kisi particular thing ko array me convert karne ke liye kaam aata hai
console.log(Array.from({ name: "hitesh" })); // intresting case : asked in interview => yeh khaali [] return karta hai kyunki humne ese batay hi nahi ki keys se array banana hai ya values se array 




let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // yaha par kisi variable ki values ko array me convert karne ke kaam aata hai
