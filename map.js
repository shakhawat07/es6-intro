const number = [3, 44, 66, 5];
//  what mapping does 
// 1. loop through each element
// 2. for each element call the function 
// 3. result for each element will be stored in an array
const doubleIt = x => x * 2;
// const output1 = number.map(doubleIt);
const output2 = number.map(x => x * 2);
// console.log(output1);
console.log(output2);