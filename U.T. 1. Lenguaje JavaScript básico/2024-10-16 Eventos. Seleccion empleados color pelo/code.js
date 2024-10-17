import { PeopleRepository } from './PeopleRepository.js';

document.addEventListener("DOMContentLoaded", renderRadiosHairColors);

function renderRadiosHairColors(e) {
    const colors = PeopleRepository.getHairColors();

    const nDiv = document.getElementById('tDivHaircolors');

    colors.forEach(color => {
        const nRadio = document.createElement('input');
        nDiv.appendChild(nRadio);
        nRadio.setAttribute('type', 'radio');
        nRadio.setAttribute('name', 'color');
        nRadio.setAttribute('id', `tRad${color}`);
        nRadio.setAttribute('value', color);
        nRadio.setAttribute('data-color-pelo', color);
        nRadio.addEventListener('change', showPeopleFilterByHaircolor)
    
        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tRad${color}`);
    
        const nText = document.createTextNode(color);
        nLabel.appendChild(nText);
    });
}

function showPeopleFilterByHaircolor(e) {
    const nRadio = e.target; /* target es la etiqueta que lanzo el evento */
    // const color = nRadio.value;
    const color = nRadio.dataset.colorPelo;
    // const color = nRadio.getAttribute('value');
    console.log(color);

    const people = PeopleRepository.getPeopleFilterByHaircolor(color);

    const nOl = document.getElementById('tOlPeople');

    // nOl.innerHTML = '';
    while (nOl.hasChildNodes()) {
        nOl.removeChild(nOl.lastChild);
    }

    people.forEach(person => {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        nLi.setAttribute('data-firstname', person.nombre);
        nLi.setAttribute('data-lastname', person.apellido);
        nLi.setAttribute('data-age', person.edad);
        nLi.setAttribute('data-phone', person.telefono);
        nLi.addEventListener('click', showPersonDetails);
    
        const nText = document.createTextNode(`${person.nombre} ${person.apellido}`);
        nLi.appendChild(nText);
    });
}

function showPersonDetails(e) {
    const nLi = e.target;
    const fullname = nLi.dataset.firstname + ' ' + nLi.dataset.lastname;
    const age = nLi.dataset.age;
    const phone = nLi.dataset.phone;

    const nDiv = document.getElementById('tDivDetails');

    
}