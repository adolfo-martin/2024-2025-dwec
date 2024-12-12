document.addEventListener('DOMContentLoaded', _ => {

    document.querySelector('#tDlgAuth').showModal();

    document.querySelector('.equis')
        .addEventListener('click', _ => {
            document.querySelector('#tDlgAuth').close();
        });
    
    document.querySelector('#tButValidate')
        .addEventListener('click', e => {
            const username = document.querySelector('#tTxtUsername').value;
            const password = document.querySelector('#tTxtPassword').value;
    
            alert(username + password);
            // e.preventDefault();
            // return false;
        });

});
