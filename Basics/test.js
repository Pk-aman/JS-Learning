console.log("Hello World!");

// Problem 1
// const str = "Pankaj"  // P n k j a a

// // Aman  -> n m a A

// const strArr = str.split('');
// strArr.sort().reverse();

// console.log(strArr)

// Problem 2
const str = "I love my India";
const ans = str.split(" ").map((word) => {return (word.split('').reverse().join(''));}).join(" ");
console.log(ans);
// const strArr = str.split(" ")
// console.log(strArr);
// const strRev = strArr.map((word) => {return (word.split('').reverse().join())})
// console.log(strRev);
// const ans = strRev.join(" ");
// console.log(ans);
