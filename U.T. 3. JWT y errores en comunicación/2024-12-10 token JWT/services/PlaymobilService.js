import Serie from "../models/Serie.js";

export default class PlaymobilService {

    /**
     * Devuelve las series de Playmobil.
     * @param { string } token El token JWT.
     * @returns { Serie[] } Las series 
     */
    async retrieveSeries(token) {
        const url = 'http://127.0.0.1:8082/api/series';

        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            var response = await fetch(url, {
                method: 'get',
                headers
            });
        } catch (error) {
            throw new PlaymobilServiceException(`Cannot retrieve series: ${error}`);
        }

        if (!response.ok) {
            throw new PlaymobilServiceException(`Cannot retrieve series: [${response.status} ${response.statusText}]`);
        }

        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new PlaymobilServiceException(`Cannot retrieve series: ${error}`);
        }

        if (!data.ok) {
            throw new PlaymobilServiceException(`Cannot retrieve series: ${data.message}`);
        }

        return data.series.map(({ uuid, denomination }) => new Serie(uuid, denomination));
    }
}


export class PlaymobilServiceException extends Error {
    constructor(message) {
        super(message);
    }
}