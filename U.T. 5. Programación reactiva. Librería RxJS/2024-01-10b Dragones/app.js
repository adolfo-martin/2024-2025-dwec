import { from, filter, map, tap } from 'rxjs';

const dragones = [
    { id: 1, nombre: 'Acarion', longitud: 9, peso: 23000 },
    { id: 2, nombre: 'Besarion', longitud: 15, peso: 65000 },
    { id: 3, nombre: 'Cursarion', longitud: 7, peso: 15000 },
    { id: 4, nombre: 'Divirion', longitud: 14, peso: 54000 },
    { id: 5, nombre: 'Estocarion', longitud: 18, peso: 97000 },
];

const esGrande = ({ peso }) => peso > 50000;
// const extraerDatosDeInteres = ({ nombre, longitud, peso }) => ({ nombre, longitud, peso });
const extraerDatosDeInteres = ({ id, ...otrasPropiedades }) => otrasPropiedades;

const dragones$ = from(dragones).pipe(
    map(extraerDatosDeInteres),
    tap(dragon => console.log(`Soy el dragón ${dragon.nombre} y peso ${dragon.peso}`)),
    filter(esGrande)
);

dragones$.subscribe(console.log);