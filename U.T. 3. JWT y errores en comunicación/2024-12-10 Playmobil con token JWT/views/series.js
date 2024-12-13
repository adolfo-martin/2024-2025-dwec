import PlaymobilService, { PlaymobilServiceException } from "../services/PlaymobilService.js";
import { closeSpinner, openSpinner } from "./spinner.lib.js";


document.addEventListener('DOMContentLoaded', async _ => {
    openSpinner();
    const token = getToken();

    const service = new PlaymobilService();
    try {
        const series = await service.retrieveSeries(token);
        renderSeries(series);
    } catch (error) {
        window.location = `/views/error.html?code=500&message=${error.message}`;
        return;
    } finally {
        closeSpinner();
    }

});


function getToken() {
    return window.sessionStorage.getItem('token');
}


function renderSeries(series) {
    const nUl = document.querySelector('#tUlSeries');

    series.forEach(serie => {
        const nLi = document.createElement('li');
        nUl.appendChild(nLi);
        nLi.textContent = serie.name;
    });
}