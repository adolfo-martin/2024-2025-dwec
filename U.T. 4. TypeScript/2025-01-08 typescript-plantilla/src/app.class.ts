import PokemonsServiceInterface from "./services/pokemons.services.interfaces";

export default class App {
    constructor(private readonly service: PokemonsServiceInterface) { }

    public async start() {
        console.log('Lista de pokemons:');
        const pokemons = await this.service.getPokemons();
        pokemons.forEach(pokemon => console.log('\t', pokemon.name));
    }
}