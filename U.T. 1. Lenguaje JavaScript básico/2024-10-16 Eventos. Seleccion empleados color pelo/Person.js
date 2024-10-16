/**
 * Represents a person.
 * @constructor
 * @param {string} firstname - The name of the person.
 * @param {string} lastname - The surname of the person.
 */
export class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }
    
    get firstname() {
        return this._firstname;
    }
    
    get lastname() {
        return this._lastname;
    }

    get haircolor() {
        return this._haircolor;
    }
    
    set haircolor(haircolor) {
        this._haircolor = haircolor;
    }

    fullname() {
        return `${this._firstname} ${this._lastname}`;
    }
}

// const person = new Person('Alicia', 'Ramírez');
// console.log(person.fullname());
// person.haircolor = 'dark';
// console.log(person.haircolor);