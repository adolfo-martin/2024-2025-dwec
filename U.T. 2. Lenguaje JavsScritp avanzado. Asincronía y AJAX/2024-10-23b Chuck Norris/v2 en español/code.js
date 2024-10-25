document.addEventListener('DOMContentLoaded', retrieveJoke);


function retrieveJoke(_) {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            const jokeInEnglish = data.value;
            translateEnglishToSpanish(jokeInEnglish)
        })
        .catch(error => console.error(error));
}


function translateEnglishToSpanish(sentenceInEnglish) {
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${sentenceInEnglish}`)
        .then(response => response.json())
        .then(data => {
            const jokeInSpanish = data[0][0][0];
            const nJoke = document.getElementById('tParJoke');
            nJoke.textContent = jokeInSpanish;
        })
        .catch(error => console.error(error))
}