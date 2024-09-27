'use strict';

class Person {
    #age = undefined; // # propiedad realmente privada

    constructor(firstname, lastname) {
        this._firstname = firstname; // _ propiedad falsamente privada
        this._lastname = lastname;   // para avisar que deben usar el getter y setter
    }

    get firstname() { 
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

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