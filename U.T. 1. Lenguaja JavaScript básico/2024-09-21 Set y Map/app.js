const frutas = new Set();

frutas.add('manzana');
frutas.add('pera');
frutas.add('manzana');
frutas.add('pera');
frutas.add('melón');
frutas.add('fresa');

console.table(frutas);

const colores = new Set(['rojo', 'verde', 'azul', 'rojo', 'verde', 'azul']);
console.log(colores);

console.clear();

const equipos = new Map();
equipos.set('rm', 'Real Madrid');
equipos.set('bc', 'Fútbol Club Barcelona');
equipos.set('am', 'Atlético de Madrid');

console.table(equipos);
console.log(equipos.get('bc'));
console.log(equipos.keys());

const claves = Array.from(equipos.keys());
console.log(claves);

console.log(equipos.values());
console.log(Array.from(equipos.values()));