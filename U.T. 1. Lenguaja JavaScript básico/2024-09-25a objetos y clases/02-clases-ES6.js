'use strict';

class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (typeof (value) !== 'number') {
            throw new Error(`El valor ${value} no es correcto para la edad.`)
        }

        if (value < 0 || value > 130) {
            throw new Error(`El valor ${value} no es correcto para la edad.`)
        }

        this._age = value;
    }

    fullname() {
        return `${this._firstname} ${this._lastname}`;
    }
}

const person = new Person('Adolfo', 'Martin');
console.log(person);
console.log(person.firstname);
console.log(person.fullname());

person.firstname = 'María';
console.log(person.firstname);

try {
    person.age = -25;
    console.log(person.age);
} catch (error) {
    console.log(`EXCEPTION: ${error.message}`)
}

try {
    person.age = 'veinticinco';
    console.log(person.age);
} catch (error) {
    console.log(`EXCEPTION: ${error.message}`)
}

try {
    person.age = 25;
    console.log(person.age);
} catch (error) {
    console.log(`EXCEPTION: ${error.message}`)
}