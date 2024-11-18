document.addEventListener('DOMContentLoaded', _ => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get('error-code');
    const message = params.get('message');

    if (!code) {
        document.querySelector('#tParCode').textContent = 'desconocido';
    } else {
        document.querySelector('#tParCode').textContent = code;
    }
    
    document.querySelector('#tParMessage').textContent = message;
});