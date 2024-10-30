document.addEventListener('DOMContentLoaded', setup);


function setup(_) {
    setupQuantityControls();
    setupAskforNamesButton();
}


function setupAskforNamesButton() {
    document.getElementById('tButAskforNames').addEventListener('click', async e => {
        const quantity = document.getElementById('tRngQuantity').value;

        let gender;
        if (document.getElementById('tRadMale').checked) {
            gender = document.getElementById('tRadMale').value;
        } else if (document.getElementById('tRadFemale').checked) {
            gender = document.getElementById('tRadFemale').value;
        } else {
            gender = document.getElementById('tRadBoth').value;
        }

        const names = await getNames(quantity, gender);
        renderNames(names);
    });
}


function renderNames(names) {
    const nTbody = document.getElementById('tBdyNames');
    // nTbody.innerHTML = '';
    while (nTbody.hasChildNodes()) {
        nTbody.removeChild(nTbody.lastChild);
    }

    names.forEach(name => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);
        const nTd = document.createElement('td');
        nTr.appendChild(nTd);
        nTd.innerText = name;
    });
}


function setupQuantityControls() {
    const nRange = document.getElementById('tRngQuantity');
    const nText = document.getElementById('tTxtQuantity');

    nRange.value = 1;
    nText.value = 1;

    nRange.addEventListener('change', updateQuantity);

    function updateQuantity(e) {
        nText.value = nRange.value;
    }
}


async function getNames(quantity, gender) {
    const url = `https://namey.muffinlabs.com/name.json?count=${quantity}&type=${gender}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        alert(error);
    }
}