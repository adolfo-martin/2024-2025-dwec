import { datosEmpresa as employees } from "./data.js";
import { Person } from "./Person.js";

export class PeopleRepository {
    static getHairColors() {
        const colors = employees
            .map(employee => employee.colorPelo);
        return Array.from(new Set(colors));
    }

    static getPeopleFilterByHaircolor(color) {
        const people = employees.filter(employee => employee.colorPelo === color);
        return people;
    }
}

// const repository = new PeopleRepository();
// console.log(repository.getHairColors());