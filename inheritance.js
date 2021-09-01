// class name's first letter should in be upper case
class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        // this is used for using class property
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMember {
    sessionTime;
    constructor(name, address, time) {
        super(name, address);
        this.sessionTime = time;
    }
    startSession(time) {
        console.log(this.name + ' starts a support session at ' + time);
    }
}
const x = new Support();
const y = new Support('Sk', 'Canada', 11);
const z = new Support('Mew', 'UK', 4);
y.startSession('11am');
z.startSession('4pm');
console.log(x);
console.log(y);
console.log(z);
// __proto__ is used to find the parent of that class
console.log(z.__proto__.__proto__.__proto__.__proto__);
console.log(z.hasOwnProperty('sessionTime'));