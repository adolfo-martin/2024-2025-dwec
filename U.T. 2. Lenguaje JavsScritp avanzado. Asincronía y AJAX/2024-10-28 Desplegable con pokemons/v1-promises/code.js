document.addEventListener('DOMContentLoaded', configurar);


function configurar(_) {
    llenarDesplegablePokemons();
}


function llenarDesplegablePokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
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
        })
        .catch(console.error);
}


function mostrarDetallePokemon(e) {
    const nSelect = e.target; // currentTarget
    const url = nSelect.value;
    console.log(url);

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            document.getElementById('tSpnNombre').textContent = datos.name;
            document.getElementById('tImgImagen').src = datos.sprites.front_default;
            document.getElementById('tSpnAltura').textContent = datos.height;
            document.getElementById('tSpnPeso').textContent = datos.weight;
        })
        .catch(console.error);
}