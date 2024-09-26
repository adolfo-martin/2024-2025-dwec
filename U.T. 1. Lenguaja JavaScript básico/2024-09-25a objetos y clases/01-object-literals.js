'use strict';

console.clear();

const person = {
    firstname: 'Adolfo',
    lastname: 'Martín',
    fullname1() {
        return `${this.firstname} ${this.lastname}`;
    },
    fullname2: function () {
        return `${this.firstname} ${this.lastname}`;
    },
    fullname3: () => `${this.firstname} ${this.lastname}`
}

console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname1());

console.log(person["firstname"]);
console.log(person["lastname"]);
console.log(person["fullname1"]());

console.log(person.fullname2());
console.log(person.fullname3());

