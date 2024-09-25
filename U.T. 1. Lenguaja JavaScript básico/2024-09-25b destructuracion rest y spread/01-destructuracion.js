'use strict';

const person = {
    firstname: 'Adolfo',
    lastname: 'Martín',
    age: 36,
    eyes: 'green',
    height: 195,
    weight: 84,
}

// const height = person.height;
// const weight = person.weight;

const { height: altura, weight: peso } = person;
console.log(altura, peso);

const watches = [
    'Casio',
    'Rolex',
    'Seiko',
];

watches.push('Timex', 'Tudor', 'Citizen', 'Orient');
watches[7] = 'Longines';
// console.table(watches);

// const firstWatch = watches[0];
// const secondWatch = watches[1];
// const thirdWatch = watches[2];

// operador rest ...
const [ firstWatch, secondWatch, thirdWatch, ...otherWatches ] = watches;
console.log(firstWatch, secondWatch, thirdWatch );
console.log(otherWatches);

// operador spread ...
const frutas = ['limón', 'platano', 'ciruela', ...watches, 'kiwi', 'sandia'];
console.table(frutas);
