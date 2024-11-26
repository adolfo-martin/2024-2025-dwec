import PokemonsService from "/services/PokemonsService.js";

document.addEventListener('DOMContentLoaded', setup);

async function setup(_) {
    const service = new PokemonsService();
    const pokemons = await service.retrievePokemons();

    const promises = pokemons.map(pokemon => service.retrievePokemonByUrl(pokemon.url));
    const pokemonsAux = await Promise.all(promises);
    
    createPokemonCards(pokemonsAux);
}


function createPokemonCards(pokemons) {
    pokemons.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
}


async function createPokemonCard(pokemon) {
    const nContainer = document.querySelector('#tDivContainer');

    const nDivCard = document.createElement('div');
    nContainer.appendChild(nDivCard);
    // nDivCard.setAttribute('class', 'card');
    nDivCard.classList.add('card');

    const nDivName = document.createElement('div');
    nDivCard.appendChild(nDivName);
    nDivName.textContent = pokemon.name;

    const nDivWeight = document.createElement('div');
    nDivCard.appendChild(nDivWeight);
    nDivWeight.textContent = pokemon.weight;

    const nDivHeight = document.createElement('div');
    nDivCard.appendChild(nDivHeight);
    nDivHeight.textContent = pokemon.height;

    nDivCard.style.backgroundImage = `url(${pokemon.image})`;
}
