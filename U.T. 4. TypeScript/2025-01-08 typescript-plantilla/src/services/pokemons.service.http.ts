import Pokemon from "../models/pokemon.class";
import PokemonsServiceInterface from "./pokemons.services.interfaces";

export default class PokemonsServiceHttp implements PokemonsServiceInterface {
    public async getPokemons(): Promise<Pokemon[]> {
        const url: string = 'https://pokeapi.co/api/v2/pokemon';
        const response = await fetch(url);
        const data: { results: Array<{name: string, url: string}>} = await response.json();
        return data.results.map(pokemon => 
            new Pokemon(parseInt(pokemon.url.split('/')[6]), pokemon.name)
        );
    }
    getPokemonById(id: number): Promise<Pokemon | undefined> {
        throw new Error("Method not implemented.");
    }
    createPokemon(pokemon: Pokemon): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updatePokemon(pokemon: Pokemon): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deletePokemon(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}