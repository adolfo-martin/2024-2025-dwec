export default class AuthenticationService {
    /**
     * Valida el usuario y contraseña y devuelve el token de acceso.
     * @param { string } username El usuario.
     * @param { string } password La contraseña.
     * @returns { string } El token de acceso.
     */
    async validateUser(username, password) {
        const url = 'http://127.0.0.1:8081/api/login_user';
    
        try {
            var response = await fetch(url, { 
                method: 'post', 
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }, 
                body: JSON.stringify({ username, password }) 
            });
        } catch (error) {
            throw new AuthenticationServiceException(`Cannot validate user: ${error}`);
        }
    
        if (!response.ok) {
            throw new AuthenticationServiceException(`Cannot validate user: [${response.status} ${response.statusText}]`);
        }
    
        try {
            var data = await response.json();
        } catch (error) {
            throw new AuthenticationServiceException(`Cannot validate user: ${error}`);
        }
    
        if (!data.ok) {
            throw new AuthenticationServiceException(`Cannot validate user: ${data.message}`);
        }
    
        return data.accessToken;
    }

}


export class AuthenticationServiceException extends Error {
    constructor(message) {
        super(message);
    }
}
