import { retrievePersonById, retrievePeople, retrieveTenNames } from "./starwars.service.js";

document.addEventListener('DOMContentLoaded', async _ => {
    // const person = await retrievePersonById(3);
    // console.log(person);

    // const people = await retrievePeople();
    // console.log(people);

    const people = await retrieveTenNames();
    console.log(people);
});