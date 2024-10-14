'use strict';

function mostrarMensaje(
    nombre = 'Adolfo', 
    apellidos = 'Martín González', 
    poblacion = 'Lorca', 
    pais = 'España'
) {
    console.log(`Hola, soy ${nombre} ${apellidos}. Vivo en ${poblacion} y nací en ${pais}.`)
}

console.clear();
mostrarMensaje();
mostrarMensaje('María');
mostrarMensaje(undefined, 'Sánchez Jiménez', undefined, 'Francia');

function sumar(numero1, numero2) {
    return numero1 + numero2;
}