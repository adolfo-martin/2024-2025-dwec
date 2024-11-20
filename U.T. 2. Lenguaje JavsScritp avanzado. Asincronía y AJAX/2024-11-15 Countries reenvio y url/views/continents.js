import CountriesService, { CountriesServiceException } from "/services/CountriesService.js";
import { openSpinner, closeSpinner} from '../utils/spinner.lib.js';


document.addEventListener('DOMContentLoaded', async _ => {
    openSpinner();
    setupButton();

    const service = new CountriesService();
    try {
        const continents = await service.retrieveContinents();
        renderContinents(continents);
    } catch (error) {
        window.location = `/views/errors.html?error-code=500&message=${error.message}`;
    } finally {
        closeSpinner();
    }
});

function renderContinents(continents) {
    const nDivContinents = document.querySelector('#tDivContinents');

    continents.forEach(({ code, name }) => {
        const nRadio = document.createElement('input');
        nDivContinents.appendChild(nRadio);
        nRadio.setAttribute('type', 'radio');
        nRadio.setAttribute('name', 'continent');
        nRadio.setAttribute('value', code);
        nRadio.setAttribute('id', `tRad${code}`);

        const nLabel = document.createElement('label');
        nDivContinents.appendChild(nLabel);
        nLabel.setAttribute('for', `tRad${code}`);
        nLabel.textContent = name;
    });
}

function setupButton() {
    const nButton = document.querySelector('#tButChooseContinent');
    nButton.addEventListener('click', e => {
        const nSelectedRadio = document.querySelector('input[type=radio][name=continent]:checked');
        if (!nSelectedRadio) {
            alert('Tienes que seleccionar un continente');
            return;
        }

        const continentCode = nSelectedRadio.value;
        window.location = `/views/countries.html?continent=${continentCode}`;
    });
}