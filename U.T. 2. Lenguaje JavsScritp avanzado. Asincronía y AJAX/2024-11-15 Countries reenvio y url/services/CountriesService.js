export default class CountriesService {
    async retrieveContinents() {
        try {
            const response = await fetch('http://localhost:8080/api/continents');
            const data = await response.json();
            return data.continents;
        } catch (error) {
            throw new CountriesServiceException(`Cannot retrieve continents: ${error.message}`);
        }
    }

    async retrieveCountryByCode(countryCode) {
        try {
            const response = await fetch(`http://localhost:8080/api/countries/${countryCode}`);
            const data = await response.json();
            return data.country;
        } catch (error) {
            throw new CountriesServiceException(`Cannot retrieve country with code ${countryCode}: ${error.message}`);
        }
    }


    async retrieveCountriesWithFlagsByContinent(continentCode) {
        try {
            const response = await fetch('http://localhost:8080/api/countries');
            const data = await response.json();
            const countriesWithoutFlag = data.countries
                .filter(({continent}) => continent === continentCode)
                .map(({code, name}) => ({code, name}) )
                ;

            const promises = countriesWithoutFlag.map(country => this.retrieveCountryByCode(country.code));
            const result = await Promise.all(promises);
            console.table(result);
        } catch (error) {
            throw new CountriesServiceException(`Cannot retrieve countries: ${error.message}`);
        }
    }


    async retrieveCountriesByContinent(continentCode) {
        try {
            const response = await fetch('http://localhost:8080/api/countries');
            const data = await response.json();
            return data.countries
                .filter(({continent}) => continent === continentCode)
                .map(({code, name}) => ({code, name}) )
                ;
        } catch (error) {
            throw new CountriesServiceException(`Cannot retrieve countries: ${error.message}`);
        }
    }
}

export class CountriesServiceException extends Error {
    constructor(message) {
        super(message);
    }
}