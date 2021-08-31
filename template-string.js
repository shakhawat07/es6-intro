const singleQuote = 'This is single quoted line';
const doubleQuote = 'This is double quoted line';
const backQuote = `This is back quoted line`;
const multilineOld = 'This is a multiline' +
    'with' +
    'old way';
const multilineNew = `This is a multiline
with
back quote 
and
ES6`;
console.log(multilineOld);
console.log(multilineNew);

const count = 5;
const friends = ['Sk', 'Mew', 'Cat'];

const old1 = '<h3 class="friend-name">Friend-5</h3>';
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;
console.log(old1);
console.log(old2);
console.log(new1);
console.log(new2);

const first = 'Sk';
const second = 'Hossain';
const fullNameOld = 'Name = ' + first + ' ' + second;
const fullNameNew = `Name = ${first} ${second}. 
He has a money = ${(friends.length + 7) * 500}`;
console.log(fullNameOld);
console.log(fullNameNew);




