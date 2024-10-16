import { datosEmpresa as employees } from "./data.js";
import { Person } from "./Person.js";

export class PeopleRepository {
    getHairColors() {
        const colors = employees
            .map(employee => employee.colorPelo);
        return Array.from(new Set(colors));
    }
}

// const repository = new PeopleRepository();
// console.log(repository.getHairColors());