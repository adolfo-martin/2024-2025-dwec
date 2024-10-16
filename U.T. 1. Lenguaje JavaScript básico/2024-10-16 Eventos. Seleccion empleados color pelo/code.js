import { PeopleRepository } from './PeopleRepository.js';

document.addEventListener("DOMContentLoaded", showHairColors);

function showHairColors(e) {

    const repository = new PeopleRepository();
    colors = repository.getHairColors();

}