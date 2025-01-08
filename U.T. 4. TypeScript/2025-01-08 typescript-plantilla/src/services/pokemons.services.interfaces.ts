import Pokemon from "../models/pokemon.class";

export default interface PokemonsServiceInterface {
    getPokemons(): Promise<Pokemon[]>;
    getPokemonById(id: number): Promise<Pokemon|undefined>;
    createPokemon(pokemon: Pokemon): Promise<void>;
    updatePokemon(pokemon: Pokemon): Promise<void>;
    deletePokemon(id: number): Promise<void>;
}