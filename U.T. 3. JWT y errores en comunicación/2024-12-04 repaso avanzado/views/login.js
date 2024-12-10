document.addEventListener('DOMContentLoaded', setup);


function setup(_) {
    setupValidateButton();
}


function setupValidateButton() {
    document.querySelector('#tButValidate')
        .addEventListener('click', async _ => {
            const username = document.querySelector('#tTxtUsername').value;
            const password = document.querySelector('#tTxtPassword').value;
            try {
                const token = await validateUserAndRetrieveToken(username, password);
                window.sessionStorage.setItem('token', token);
                window.location = '/views/index.html';
            } catch (error) {
                alert(`ERROR: ${error}`);
            }
        });
}


async function validateUserAndRetrieveToken(username, password) {
    try {
        var response = await fetch('http://192.168.0.71:8081/api/login_user', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
    } catch (error) {
        throw new Error(`Cannot validate user: ${error}`);
    }

    if (!response.ok) {
        throw new Error(`Cannot validate user: [${response.status} ${response.statusText}]`);
    }

    try {
        var data = await response.json();
    } catch (error) {
        throw new Error(`Cannot validate user: ${error}`);
    }

    if (!data.ok) {
        throw new Error(`Cannot validate user: ${data.message}`);
    }

    return data.accessToken;
}