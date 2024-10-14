'use strict';

<<<<<<< HEAD
const person = {
    firstname: 'Adolfo',
    lastname: 'Martin',
    fullname1() {
        return `${this.firstname} ${this.lastname}`;
    },
    fullname2: function() {
        return `${this.firstname} ${this.lastname}`;
    },
    fullname3: () => `${this.firstname} ${this.lastname}` // No funciona por this
=======
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
>>>>>>> ca46dffa3aa802efd1816c56b9a2543d47bf947d
}

console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname1());

<<<<<<< HEAD
console.log(person['firstname']);
console.log(person['lastname']);
console.log(person['fullname1']());

console.log(person.fullname2());
console.log(person.fullname3());
=======
console.log(person["firstname"]);
console.log(person["lastname"]);
console.log(person["fullname1"]());

console.log(person.fullname2());
console.log(person.fullname3());

>>>>>>> ca46dffa3aa802efd1816c56b9a2543d47bf947d
