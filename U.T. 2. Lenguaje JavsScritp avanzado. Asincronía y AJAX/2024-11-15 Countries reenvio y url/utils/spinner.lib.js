const template = `
    <style>
        div.container-spinner {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1000;
            width: 100vw;
            height: 100vh;
            display: grid;
            place-content: center;
            background-color: rgba(0, 0, 0, 0.4);
            overflow: hidden;
        }

        div.spinner {
            border-top: solid 20px red;
            border-bottom: solid 20px green;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            animation: giro 2s linear 0s infinite;
        }

        @keyframes giro {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    </style>

    <div id="tDlgSpinner" class="container-spinner">
        <div class="spinner"></div>
    </div id="">
`;

export function openSpinner() {
    const nDivContainer = document.createElement('div');
    nDivContainer.setAttribute('id', 'tDivContainerSpinner');
    nDivContainer.innerHTML = template;
    document.body.appendChild(nDivContainer);
}

export function closeSpinner() {
    document.body.removeChild(document.querySelector('#tDivContainerSpinner'));
}