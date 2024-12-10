document.addEventListener('DOMContentLoaded', setup);

function setup(e) {
    setupIdentificateButton();
    retrieveAndShowUserIfExist();
}


function retrieveAndShowUserIfExist() {
    const token = window.sessionStorage.getItem('token');
    if (token) {
        const decodedToken = decodeToken(token);
        document.querySelector('#tDivUsername').textContent = 
            `${decodedToken.firstname} ${decodedToken.lastname}`;
    }
}


function setupIdentificateButton() {
    document.querySelector('#tButIdentificate')
        .addEventListener('click', _ => {
            window.location = '/views/login.html'
        })
}


function decodeToken(token) {
    const parseJwt = token => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            throw new Error(`Problem decoding token "${token}": ${error.message}.`);
        }
    }
    const tokenDecodificado = parseJwt(token);
    return tokenDecodificado;
}