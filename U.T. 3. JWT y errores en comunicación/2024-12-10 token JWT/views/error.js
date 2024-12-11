document.addEventListener('DOMContentLoaded', _ => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const message = params.get('message');

    document.querySelector('#tParMessage').textContent = message;
});