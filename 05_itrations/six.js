// filter operations

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((itemsInArray) => {
// //   console.log(itemsInArray);
//   return itemsInArray  // forEach koi bhi value return nahi karta hai hum chahe ya na chahe
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// agar humne scope open kar diya hai to hume kuch return to karna hi padega
// const nweNums = myNums.filter((num) => {
//     return num > 4
// });

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "NOn-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1984, edition: 2007 },
  { title: "Book Four", genre: "NOn-Fiction", publish: 1999, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 1989, edition: 2004 },
  { title: "Book Six", genre: "Fiction", publish: 2009, edition: 2014 },
  { title: "Book Seven", genre: "History", publish: 1987, edition: 2010 },
  { title: "Book Eight", genre: "Science", publish: 1986, edition: 1996 },
  { title: "Book Nine", genre: "Fiction", publish: 2011, edition: 2016 },
  { title: "Book Ten", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1990 && bk.genre === "Fiction"
});
console.log(userBooks);

console.log(books);