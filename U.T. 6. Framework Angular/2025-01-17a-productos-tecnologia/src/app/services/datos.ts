export type ProductoT = {
    id: number,
    nombre: string,
    precio: number,
}

export const productos: ProductoT[] = [
    { id: 1, nombre: 'Ratón', precio: 9},
    { id: 2, nombre: 'Teclado', precio: 12},
    { id: 3, nombre: 'Monitor', precio: 95},
    { id: 4, nombre: 'Caja', precio: 30},
    { id: 5, nombre: 'Tarjeta gráfica', precio: 120},
    { id: 6, nombre: 'Placa base', precio: 65},
    { id: 7, nombre: 'Módulo de memoria', precio: 45},
    { id: 8, nombre: 'Procesador', precio: 135},
    { id: 9, nombre: 'Fuente de alimentación', precio: 40},
];