'use strict';

console.clear();

var nombre = 'Adolfo';
var apellidos = "Martín González";
var poblacion = 'Lorca';
var pais = 'España 🏳‍🌈';
var edad = 13;

var mensaje1 = 'Hola, soy ' + nombre + ' ' + apellidos + '. Vivo en ' 
    + poblacion + '. Nací en ' + pais + '.';
console.log(mensaje1);

// Interpolación de cadenas
var mensaje2 = `Hola, soy ${nombre} ${apellidos}. Vivo en ${poblacion}. 
    Nací en ${pais}. 
    Soy ${edad<18 ? 'menor' : 'mayor'} de edad.`;
console.log(mensaje2);