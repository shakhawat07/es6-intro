// class name's first letter should in be upper case
class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        // this is used for using class property
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name + ' starts a support session');
    }
}
const x = new Support();
const y = new Support('Sk', 'Canada');
const z = new Support('Mew', 'UK');
y.startSession();
z.startSession();
console.log(x);
console.log(y);
console.log(z);