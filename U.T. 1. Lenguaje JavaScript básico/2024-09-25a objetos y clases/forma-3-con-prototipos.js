'use strict';

var person1 = Object.create(Object);
person1.prototype.firstname = 'Lucas';
person1.prototype.lastname = 'Martínez';
person1.prototype.fullname = function () {
    return `${this.firstname} ${this.lastname}`;
}

console.log(person1.firstname);
console.log(person1.fullname());

// Clonación de objetos
var person2 = Object.assign({}, person1);
person2.firstname = 'Mónica';
person2.lastname = 'Giménez';
console.log(person2);
console.log(person2.fullname());