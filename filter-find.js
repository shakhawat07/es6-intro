// filter returns every element of the array
const numbers = [11, 2, 23, 14, 55, 4, 88];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
console.log(bigNumbers);
console.log(smallNumbers);
// array of object map 
const products = [
    { name: 'x', price: 50, color: 'red' },
    { name: 'y', price: 60, color: 'green' },
    { name: 'z', price: 70, color: 'red' },
];
const maxPrice = products.filter(product => product.price > 50);
console.log(maxPrice);
// find returns the first element only
const redItems = products.find(product => product.color == 'red');
console.log(redItems);