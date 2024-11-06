// imperativo, orientado a objetos, funcional

export class CountriesService {

    async getContinents() {
        try {
            const response = await fetch('http://127.0.0.1:8080/api/continents');
            const data = await response.json();
            return data.continents;
        } catch (error) {
            // console.log(error.message);
            throw new CountriesServiceException(`Cannot retrieve continents: ${error.message}`);
        }
    }

    getCountries() {}

    getCountriesByContinent(continentId) {}

    getCountryById(id) {}
}


class CountriesServiceException extends Error {
    constructor(message) {
        super(message);
    }
}