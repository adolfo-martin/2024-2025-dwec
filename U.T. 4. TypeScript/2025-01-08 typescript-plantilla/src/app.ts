import App from "./app.class";
import PokemonsServiceHttp from "./services/pokemons.service.http";
import PokemonsServiceMock from "./services/pokemons.service.mock";
import PokemonsServiceInterface from "./services/pokemons.services.interfaces";

(async function() {
    // const service: PokemonsServiceInterface = new PokemonsServiceMock();
    const service: PokemonsServiceInterface = new PokemonsServiceHttp();
    const app: App = new App(service);
    await app.start();
    console.log('FIN 🏁');
})();
