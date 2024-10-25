document.addEventListener('DOMContentLoaded', retrieveAndShowJoke);


function retrieveAndShowJoke(_) {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            const nJoke = document.getElementById('tParJoke');
            nJoke.textContent = data.value;
        });
}