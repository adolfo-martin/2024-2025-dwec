import AuthenticationService, { AuthenticationServiceException } from "../services/AuthenticationService.js";
import { openSpinner, closeSpinner } from "./spinner.lib.js";


document.addEventListener('DOMContentLoaded', _ => {
    setupDialog();
    setupValidateButton();
});


function setupValidateButton() {
    
    document.querySelector('#tButValidate')
        .addEventListener('click', async e => {
            openSpinner();

            e.preventDefault(); /* que no haga el submit */
            const username = document.querySelector('#tTxtUsername').value;
            const password = document.querySelector('#tTxtPassword').value;

            const service = new AuthenticationService();
            try {
                const token = await service.validateUser(username, password);
                window.sessionStorage.setItem('token', token);
                window.location = '/views/series.html';
            } catch (error) {
                window.location = `/views/error.html?message=${error.message}`;
                return;
            } finally {
                closeSpinner();
            }
            
        });
}


function setupDialog() {
    document.querySelector('#tDlgAuth').showModal();

    document.querySelector('.equis')
        .addEventListener('click', _ => {
            document.querySelector('#tDlgAuth').close();
        });
}