document.addEventListener('DOMContentLoaded', configurar);


async function configurar(_) {
    await llenarDesplegablePokemons();
}


async function llenarDesplegablePokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
    
        const pokemons = datos.results;
    
        const nSelect = document.getElementById('tSelPokemons');
        nSelect.addEventListener('change', mostrarDetallePokemon);
    
        pokemons.forEach(pokemon => {
            const nOption = document.createElement('option');
            nSelect.appendChild(nOption);
            nOption.setAttribute('value', pokemon.url);
    
            const nText = document.createTextNode(pokemon.name);
            nOption.appendChild(nText);
        });
    } catch(error) {
        console.error(error);
    }
}


async function mostrarDetallePokemon(e) {
    const nSelect = e.target; // currentTarget
    const url = nSelect.value;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        document.getElementById('tSpnNombre').textContent = datos.name;
        document.getElementById('tImgImagen').src = datos.sprites.front_default;
        document.getElementById('tSpnAltura').textContent = datos.height;
        document.getElementById('tSpnPeso').textContent = datos.weight;
    } catch(error) {
        console.error(error);
    }
}