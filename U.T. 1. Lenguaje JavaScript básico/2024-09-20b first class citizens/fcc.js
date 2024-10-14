'use strict';

function siete() {
    return 7;
}

console.clear();
console.log(siete());
console.log(siete);

let seven = siete;
console.log(seven);
console.log(seven());

console.clear();

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

//callback
function operarYMostrarResultado(operacion, numero1, numero2) {
    let resultado = operacion(numero1, numero2);
    console.log('El resultado es ' + resultado);
}

operarYMostrarResultado(restar, 5, 2);
operarYMostrarResultado(sumar, 4, 6);