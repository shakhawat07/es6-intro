const numbers = [1, 2, 3, 4];
console.log(numbers);
console.log(...numbers);    //spread operator is used to get only the values in an array
const max = Math.max(1, 2, 3);
const maxArray = Math.max(numbers);
const maxInArray = Math.max(...numbers);
console.log(max, maxArray, maxInArray);
// copy new arrays with previous arrays
const numbers2 = [...numbers, 6];
numbers.push(5);
console.log(numbers);
console.log(numbers2);

