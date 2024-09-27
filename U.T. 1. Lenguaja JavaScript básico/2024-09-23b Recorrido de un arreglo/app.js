const frutas = new Array();

frutas.push('Pera', '🍌', '🍉');
frutas.push('Naranja');
frutas.push('Limón', '🥑', 'Melón');

console.table(frutas);

console.clear();

// Primera forma. Bucle de toda la vida
for (let i = 0; i <= frutas.length; i++) {
    console.log(frutas[i]);
}

// Segunda forma. foreach de tipo in
for (let i in frutas) {
    console.log(`${parseInt(i)+1}) ${frutas[i]}`)
}

// Tercera forma. foreach de tipo of
for (let fruta of frutas) {
    console.log(fruta);
}

console.clear();

// Cuarta forma. Métodos de la clase Array.
// 4.1
function mostrarFruta(fruta, i, frutas) {
    console.log(i, fruta, frutas);
}

frutas.forEach(mostrarFruta);

// 4.2 Cuando la función se usa en un único sitio
frutas.forEach(function mostrarFruta(fruta) {
    console.log(fruta);
});

// 4.3 Cuando la función se usa en un único sitio normalmente es anónima
frutas.forEach(function(fruta) {
    console.log(fruta);
});

// 4.4 Lambdas o funciones flecha

// 1 cortar el nombre
// 2 poner la flecha entre el paréntesis y la llave
// 3 quitar la palabra function
// 4 si la función tiene un solo parámetro podemos quitar los paréntesis
// 5 si hay una sola línea de código podemos quitar las llaves
// 6 si hay una sola línea la subimos y quitamos el punto y coma
// 7 quitamos el return si no hay llaves

frutas.forEach(fruta => console.log(fruta));

// ------------------------------------
// function mostrarFruta(fruta, i, frutas) {
//     console.log(i, fruta, frutas);
// }


frutas.forEach((fruta, i, frutas) => console.log(i, fruta, frutas));


// ------------------------------------
