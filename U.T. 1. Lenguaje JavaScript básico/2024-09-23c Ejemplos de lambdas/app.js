const IVA_EXENTO = 0.0;
const IVA_SUPERREDUCIDO = 4.0;
const IVA_REDUCIDO = 10.0;
const IVA_NORMAL = 21.0;

let basesImponibles = [25.50, 12.75, 59.95, 16.50, 100.00]; 


function calcularImpuesto(base, iva) {
    let impuesto = (base * iva) / 100;
    return impuesto;
}




// function calcularYMostrarImpuesto(base) {
//     let impuesto = calcularImpuesto(base, IVA_NORMAL);
//     console.log(impuesto);
// }

basesImponibles.forEach(base => {
    let impuesto = calcularImpuesto(base, IVA_NORMAL);
    console.log(impuesto);
});

// Hacemos un mapeo
let impuestos = basesImponibles.map( base => calcularImpuesto(base, IVA_NORMAL) );

console.table(impuestos);