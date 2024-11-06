import { CountriesService } from "./CountriesService.js";

document.addEventListener('DOMContentLoaded', setup);

async function setup(_) {

    try {
        document.querySelector('#tDlgMessageLoading').showModal();

        const service = new CountriesService();
        const continents = await service.getContinents();
        // console.log(continents);
        // document.querySelector('#tDivContinents').textContent = continents;
        renderContinents(continents);

        document.querySelector('#tDlgMessageLoading').close();
    } catch (error) {
        alert(error.message);
    }
}


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

        nLabel.appendChild(document.createTextNode(name));
    });
}