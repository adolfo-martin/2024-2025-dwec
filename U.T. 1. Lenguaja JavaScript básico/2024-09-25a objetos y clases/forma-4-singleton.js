'use strict';

class BBDDSingleton {
    static _heroes = [
        'Superman',
        'Captain Marvel',
        'Spiderman',
        'Wonder Woman',
        'Black Widow',
    ];

    static _database;

    constructor() {
        // throw 'You cannot use the constructor';
    }

    static create() {
        if (BBDDSingleton._database === undefined) {
            BBDDSingleton._database = new BBDDSingleton();
        }

        return BBDDSingleton._database;
    }

    addHero(hero) {
        BBDDSingleton._heroes.push(hero);
    }

    getHeroes() {
        return BBDDSingleton._heroes;
    }
}

// const database = new BBDDSingleton();
const database = BBDDSingleton.create();
database.addHero('Thor');
console.log(database.getHeroes());