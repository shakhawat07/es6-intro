const friends = ['sk', 'mew', 'brad'];
const output = friends.map(friend => friend.length);
console.log(output);
// array of object map 
const products = [
    { name: 'x', price: 50, color: 'red' },
    { name: 'y', price: 60, color: 'green' },
    { name: 'z', price: 70, color: 'blue' },
];
const productName = products.map(x => x.color);
console.log(productName);
// map returns an array but foreach retuns nothing
// products.map(product => console.log(product));
products.forEach(product => console.log(product));

