import AuthService from "../services/AuthService.js";

document.addEventListener('DOMContentLoaded', setup);

function setup(_) {
    const form = new LoginForm();
    form.setupValidateButton();
}


class LoginForm {
    setupValidateButton() {
        document.querySelector('#tButValidate').addEventListener('click', async e =>{
            const username = document.querySelector('#tTxtUsername').value;
            const password = document.querySelector('#tTxtPassword').value;

            const service = new AuthService();
            const token = await service.validateUser(username, password);
            alert(token);
        });
    }
}