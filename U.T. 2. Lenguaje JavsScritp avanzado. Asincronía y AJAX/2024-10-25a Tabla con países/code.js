document.addEventListener('DOMContentLoaded', setup);


function setup(e) {
    retrieveCountries();
}


function retrieveCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const nTbody = document.getElementById('tTbdCountries');

            data.forEach(country => {
                const nTr = document.createElement('tr');
                nTbody.appendChild(nTr);
                nTr.addEventListener('click', showDetails);
    
                const nTdCommon = document.createElement('td');
                nTr.appendChild(nTdCommon);
                nTr.setAttribute('data-capital', country.capital);
                nTr.setAttribute('data-area', country.area);
                nTr.setAttribute('data-population', country.population);
    
                const nTextCommon = document.createTextNode(country.name.common);
                nTdCommon.appendChild(nTextCommon);
    
                const nTdOfficial = document.createElement('td');
                nTr.appendChild(nTdOfficial);
    
                const nTextOfficial = document.createTextNode(country.name.official);
                nTdOfficial.appendChild(nTextOfficial);

                const nTdFlag = document.createElement('td');
                nTr.appendChild(nTdFlag);
    
                const nImgFlag = document.createElement('img');
                nImgFlag.setAttribute('src', country.flags.svg);
                nTdFlag.appendChild(nImgFlag);
            });

        })
        .catch(error => console.error(error));
}


function showDetails(e) {
    const nDiv = document.getElementById('tDivDetails');
    nDiv.style.display = 'block';

    const nTr = e.currentTarget;
    document.getElementById('tSpnCapital').textContent = nTr.dataset.capital;
    document.getElementById('tSpnArea').textContent = nTr.dataset.area;
    document.getElementById('tSpnPopulation').textContent = nTr.dataset.population;
}