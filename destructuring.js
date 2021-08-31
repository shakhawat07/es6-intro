// simple object 
const person = {
    id: 76,
    name1: 'Mew',
    phone: '0155450000',
    address: 'Dhaka'
};
// old way to get object property values
// const name = person.name;
// const id = person.id;

// new way to get object property values
const { name1, id, phone } = person;  //destructuring object 
console.log(phone, id, name1);
// nested object  
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
// old way 
// const id3 = company.ceo.id2;
// new way 
const { id2, phone2 } = company.ceo;
const { first, second, third } = company.web.tech;
console.log(id2, phone2);
console.log(first, second, third);