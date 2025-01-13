import Pokemon from "../models/pokemon.class";

export default class PokemonsService {
    public async getAll(): Promise<Pokemon[]> {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        type PokemonDTO = { name: string, url: string };
        return data.results.map((pokemon: PokemonDTO) => {
            const id = parseInt(pokemon.url.split('/')[6]);
            return new Pokemon(id, pokemon.name)
        });
    }
}