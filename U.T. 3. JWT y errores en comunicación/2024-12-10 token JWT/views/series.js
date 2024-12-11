import PlaymobilService, { PlaymobilServiceException } from "../services/PlaymobilService.js";


document.addEventListener('DOMContentLoaded', async _ => {
    const token = getToken();

    const service = new PlaymobilService();
    try {
        const series = await service.retrieveSeries(token);
    } catch (error) {
        alert(error.message);
        window.location = `/views/error.html?code=500&message=${error.message}`;
        return;
    }

    renderSeries(series);
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