'use strict';

// Primera forma. Literal de arreglo
let diasSemana = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
];

console.clear();
console.log(diasSemana);
console.table(diasSemana);

// Segunda forma. Poniendo la posición
let frutas = [];
frutas[0] = 'Pera';
frutas[1] = 'Manzana';
frutas[2] = '🍌';
frutas[3] = 'Kiwi';
frutas[4] = '🍉';

console.table(frutas);

// Tercera forma. Clase Array.
let alumnos = new Array();
alumnos.push('Francisco');
alumnos.push('Nuria');
alumnos.push('Miguel');
alumnos.push('Cristian', 'Alejandro', 'Jesús', 'Lucas', 'Raul');
alumnos.unshift('Óscar', 'Sergio');
console.table(alumnos);

// Cuarta forma. Array asociativo
let mesesDelAño = [];
mesesDelAño['en'] = 'Enero';
mesesDelAño['fe'] = 'Febrero';
mesesDelAño['ma'] = 'Marzo';
mesesDelAño['ab'] = 'Abril';
mesesDelAño['my'] = 'Mayo';
console.table(mesesDelAño);
console.log(mesesDelAño['fe']);
console.log(mesesDelAño[1]);