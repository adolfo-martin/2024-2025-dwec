'use strict';

class Person {
<<<<<<< HEAD
    #age = undefined; // # propiedad realmente privada

    constructor(firstname, lastname) {
        this._firstname = firstname; // _ propiedad falsamente privada
        this._lastname = lastname;   // para avisar que deben usar el getter y setter
    }

    get firstname() { 
        return this._firstname;
    }

=======
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

>>>>>>> ca46dffa3aa802efd1816c56b9a2543d47bf947d
    get lastname() {
        return this._lastname;
    }

<<<<<<< HEAD
    get age() {
        return this.#age;
    }


    set age(age) {
        // if (age < 0) {
        //     this.#age = 0;
        // } else {
        //     this.#age = age;
        // }

        // this.#age = age < 0 ? 0 : age; // operador ternario

        if (age < 0) {
            throw new Error(`La edad de ${this._firstname} ${this._lastname} no puede ser negativa: ${age}`);
        } 
            
        this.#age = age;
    }

}

const person1 = new Person('Adolfo', 'Martín');
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1);

try {
    person1.age = -9;
} catch (error) {
    console.log(`Se está intentado asignar una edad incorrecta: ${error}`);
}

console.log(person1.age);
person1.age = 28;
console.log(person1.age);
=======
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
>>>>>>> ca46dffa3aa802efd1816c56b9a2543d47bf947d
