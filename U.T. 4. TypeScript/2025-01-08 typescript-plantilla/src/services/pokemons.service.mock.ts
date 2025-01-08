import Pokemon from "../models/pokemon.class";
import PokemonsServiceInterface from "./pokemons.services.interfaces";

export default class PokemonsServiceMock implements PokemonsServiceInterface {
    public async getPokemons(): Promise<Pokemon[]> {
        return [
            new Pokemon(1, 'Adolfobur'),
            new Pokemon(2, 'Raulsur'),
            new Pokemon(3, 'Javiermur'),
        ];
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