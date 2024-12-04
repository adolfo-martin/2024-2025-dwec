export default class AuthService {
    /**
     * Valida el usuario proporcionando el login y la contraseña.
     * @param {string} username Login del usuario.
     * @param {string} password Contraseña del usuario.
     * @returns {string} Token asignado a la sesión.
     */
    async validateUser(username, password) {
        try {
            /* hoisting */
            var response = await fetch('http://192.168.0.80:8081/api/login_user', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
        } catch (error) {
            return;
        }

        if (!response.ok) {
            return;
        }

        try {
            var data = await response.json();
        } catch (error) {
            return;
        }

        if (!data.ok) {
            return;
        }

        return data.accessToken;
    }
}