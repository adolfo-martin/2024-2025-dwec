import CountriesService from "../services/CountriesService.js";
import { openSpinner, closeSpinner} from '../utils/spinner.lib.js';

document.addEventListener('DOMContentLoaded', setup);


async function setup(_) {
    try {
        openSpinner();
        const continentCode = getContinentCodeFromUrl();
    
        const service = new CountriesService();
        const countries = await service.retrieveCountriesByContinent(continentCode);
        // await service.retrieveCountriesWithFlagsByContinent(continentCode);
        // return;
    
        await fillTableWithCountries(countries);
    } catch (error) {
        window.location = `/views/errors.html?error-code=500&message=${error.message}`;
    } finally {
        closeSpinner();
    }
}


function getContinentCodeFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const continent = params.get('continent');
    return continent;
}


async function fillTableWithCountries(countries) {
    const nTbody = document.querySelector('#tTabCountries>tbody');

    countries.forEach(async country => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTd = document.createElement('td');
        nTr.appendChild(nTd);
        nTd.textContent = country.name;

        const service = new CountriesService();
        const countryAux = await service.retrieveCountryByCode(country.code);

        const nTdImg = document.createElement('td');
        nTr.appendChild(nTdImg);

        const nImg = document.createElement('img');
        nTdImg.appendChild(nImg);
        nImg.setAttribute('height', '25px');
        nImg.setAttribute('src', countryAux.flags.svg);
    });
}