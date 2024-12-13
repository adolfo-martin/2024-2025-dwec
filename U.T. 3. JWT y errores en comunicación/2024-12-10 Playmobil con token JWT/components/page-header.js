class PageHeaderComponent extends HTMLElement {
    _template = `
        <style>
            header.page-header {
                display: grid;
                grid-template-columns: 1fr auto;
                grid-template-rows: auto auto;
                padding: 0.5rem;
                background-color: var(--color-900);
                color: var(--color-100);

                .company {
                    grid-column: 1;
                    grid-row: 1 / span 2;
                    font-size: 3rem;
                    text-align: center;
                }
            }
        </style>
        <header class="page-header">
            <div class="company">Juguetes Arcas</div>
            <div class="fullname"></div>
            <button type="button" id="tButSession"></button>
        </header>
    `;

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = this._template;
    }

    connectedCallback() {
        (setupSessionButton.bind(this))();
        (manageToken.bind(this))();
                
        function setupSessionButton() {
            this._shadowRoot.querySelector('#tButSession')
                .addEventListener('click', _ => {
                    const token = window.sessionStorage.getItem('token');
                    if (token) {
                        window.sessionStorage.removeItem('token');
                        window.location = '/views/index.html';
                    } else {
                        window.location = '/views/login.html';
                    }
                });
        
        }
        
        
        function manageToken() {
            const token = window.sessionStorage.getItem('token');
            
            if (token) {
                const decodedToken = decodeToken(token);
                const fullname = `${decodedToken.firstname} ${decodedToken.lastname}`;
                this._shadowRoot.querySelector('div.fullname').textContent = fullname;
                this._shadowRoot.querySelector('#tButSession').textContent = 'Cerrar sesión';
            } else {
                this._shadowRoot.querySelector('div.fullname').textContent = '';
                this._shadowRoot.querySelector('#tButSession').textContent = 'Iniciar sesión';
            }
        }
        
        
        function decodeToken(token) {
            const parseJwt = token => {
                try {
                    return JSON.parse(atob(token.split('.')[1]));
                } catch (error) {
                    throw new Error(`Problem decoding token "${token}": ${error.message}.`);
                }
            }
            const tokenDecodificado = parseJwt(token);
            return tokenDecodificado;
        }   
    }
}

window.customElements.define('page-header', PageHeaderComponent);