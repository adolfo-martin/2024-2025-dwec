import PokemonsService from "./services/pokemons.service";

(async function() {
    const service = new PokemonsService();
    const pokemons = await service.getAll();
    console.log(pokemons.map(pokemon => pokemon.name));
})();