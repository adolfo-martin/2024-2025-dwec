document.addEventListener('DOMContentLoaded', async _ => {
    const pokemons = await retrievePokemons();
    console.log(pokemons);

    const promises = pokemons.map(pokemon => retrievePokemonByUrl(pokemon.url));
    const pokemonsAux = await Promise.all(promises);
    console.log(pokemonsAux);
});


async function retrievePokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

async function retrievePokemonByUrl(url) {
    const response = await fetch(url);
    const data = await response.json();
    return {
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.front_default,
    }
}