export default class PokemonsService {

    async retrievePokemons() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();
            return data.results;
        } catch (error) {
            throw new PokemonsServiceException('Cannot retrieve all pokemons: ' + error.message);
        }
    }

    async retrievePokemonById(id) {
        try {
            const response = await fetch('');
            const data = await response.json();
            return data;
        } catch (error) {
            throw new PokemonsServiceException('Cannot retrieve all pokemons: ' + error.message);
        }
    }

    async retrievePokemonByUrl(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            // const pokemon = {
            //     name: data.name,
            //     weight: data.weight,
            //     height: data.height,
            //     image: data.sprite.front_default,
            // }
            // return pokemon;

            const { name, weight, height, sprites } = data; // destructuración
            return { name, weight, height, image: sprites.front_default }; // objeto
        } catch (error) {
            throw new PokemonsServiceException('Cannot retrieve all pokemons: ' + error.message);
        }
    }

}

export class PokemonsServiceException extends Error {
    constructor(message) {
        super(message);
    }
}