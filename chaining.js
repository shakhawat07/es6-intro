// destructuring array 
const [p, q] = [2, 3, 4, 5]
console.log(p, q);
// destructuring structure 
const { a, b, c, d } = { a: 1, b: 2, c: 3, d: 4 };
console.log(b, d);
// chaining
const company = {
    name2: 'GP',
    ceo: { id2: 1, phone2: '01715444444' },
    web: {
        employee: 22,
        framework: 'React',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};
// this is called chaining
console.log(company.web.tech.first);
// console.log(company.backend.tech.first);    //show errors

// this is called optional chaining where we use ? mark 
// console.log(company?.backend?.tech?.first);


