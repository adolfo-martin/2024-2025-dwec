import { datosEmpresa as employees } from "./datos_empresa.js";

console.log(employees.length);

// for (const employee of employees) {
//     if (employee.categoria === 'informatico')
//     console.log(employee.nombre);
// }

function isITGuy(employee) {
    return employee.categoria === 'informatico';
}

function hasBlueEyes(employee) {
    return employee.colorOjos === 'azul';
}

function getFullname(employee) {
    return `${employee.nombre} ${employee.apellido}`;
}


// const iTPeople = employees.filter(isITGuy);
// console.log(iTPeople.length);

// const iTPeopleWithBlueEyes = iTPeople.filter(hasBlueEyes);
// console.log(iTPeopleWithBlueEyes.length);
// console.log(iTPeopleWithBlueEyes[27]);

// const iTPeopleWithBlueEyesFullnames = iTPeopleWithBlueEyes.map(getFullname);
// console.table(iTPeopleWithBlueEyesFullnames);

// const iTPeopleWithBlueEyesFullnames = employees
//     .filter(isITGuy)
//     .filter(hasBlueEyes)
//     .map(getFullname);

// console.table(iTPeopleWithBlueEyesFullnames);


function sortByAge(employee1, employee2) {
    return employee1.edad > employee2.edad;
}

function sortByLastnameFirstname(employee1, employee2) {
    if (employee1.apellido.localeCompare(employee2.apellido) === 0) {
        return employee1.nombre.localeCompare(employee2.nombre) === 0;
    } else {
        return employee1.apellido.localeCompare(employee2.apellido);
    }
}


const iTPeopleWithBlueEyesFullnames = employees
    .filter( employee => employee.categoria === 'informatico' )
    .filter( employee => employee.colorOjos === 'azul' )
    .sort(sortByLastnameFirstname)
    .sort( (employee1, employee2) => employee1.edad > employee2.edad )
    .map( employee => `${employee.nombre} ${employee.apellido}` )

console.table(iTPeopleWithBlueEyesFullnames);
