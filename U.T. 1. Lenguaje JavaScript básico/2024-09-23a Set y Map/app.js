let paises = new Set();

paises.add('España');
paises.add('Francia');
paises.add('Inglaterra');
paises.add('Francia');
paises.add('Alemania');
paises.add('España');

console.table(paises);

let paisesComoArray = Array.from(paises);
console.table(paises);


let paisesComoMapa = new Map();
paisesComoMapa.set('es', 'España');
paisesComoMapa.set('fr', 'Francia');
paisesComoMapa.set('al', 'Alemania');
paisesComoMapa.set('in', 'Inglaterra');

console.table(paisesComoMapa);