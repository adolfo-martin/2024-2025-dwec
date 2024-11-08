'use strict';

import { CountriesService } from "./CountriesService.js";

document.addEventListener('DOMContentLoaded', setup);

async function setup(_) {

    try {
        document.querySelector('#tDlgMessageLoading').showModal();

        const service = new CountriesService();
        const continents = await service.getContinents();
        renderContinents(continents);

        document.querySelector('#tDlgMessageLoading').close();
    } catch (error) {
        alert(error.message);
    }
}


function renderContinents(continents) {
    const nDivContinents = document.querySelector('#tDivContinents');

    continents.forEach(({ code, name }) => {
        const nCheckbox = document.createElement('input');
        nDivContinents.appendChild(nCheckbox);
        nCheckbox.setAttribute('type', 'checkbox');
        nCheckbox.setAttribute('value', code);
        nCheckbox.setAttribute('id', `tChk${code}`);
        nCheckbox.addEventListener('change', renderCountries);
        
        const nLabel = document.createElement('label');
        nDivContinents.appendChild(nLabel);
        nLabel.setAttribute('for', `tChk${code}`);

        nLabel.appendChild(document.createTextNode(name));
    });
}


async function renderCountries(e) {
    const nSelectedCheckboxes = document.querySelectorAll('input[type=checkbox]:checked');

    const service = new CountriesService();
    const countries = [];

    for (const nCheckbox of nSelectedCheckboxes) {
        const countriesAux = await service.getCountriesByContinent(nCheckbox.value);
        countries.push(...countriesAux); // spread: descompone un array en sus elementos componentes
    };

    const nOl = document.querySelector('#tOlCountries');
    countries.forEach(country => {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        nLi.textContent = country.name;
    });

    // nSelectedCheckboxes.forEach(async nCheckbox => {
    //     const countriesAux = await service.getCountriesByContinent(nCheckbox.value);
    //     countries.push(...countriesAux); // spread: descompone un array en sus elementos componentes
    // });

    // const nOl = document.querySelector('#tOlCountries');
    // countries.forEach(country => {
    //     const nLi = document.createElement('li');
    //     nOl.appendChild(nLi);
    //     nLi.textContent = country.name;
    // });
}