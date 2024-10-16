import { toppings } from './data.js';

document.addEventListener('DOMContentLoaded', setup);

let totalPrice = 0.0;


function setup(e) {
    fillTableToppings(toppings);
}

function fillTableToppings(toppings) {
    const nTbody = document.getElementById('tBbdToppings');

    toppings.forEach(topping => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTdSelector = document.createElement('td');
        nTr.appendChild(nTdSelector);
    
        const nCheckbox = document.createElement('input');
        nTdSelector.appendChild(nCheckbox);
        nCheckbox.setAttribute('type', 'checkbox');
        nCheckbox.setAttribute('value', topping.id);
        nCheckbox.setAttribute('data-topping', topping.id);
        nCheckbox.setAttribute('data-price', topping.price);
        nCheckbox.addEventListener('change', calculatePrice)
    
        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);
    
        const nTextName = document.createTextNode(topping.type);
        nTdName.appendChild(nTextName);
    
        const nTdPrice = document.createElement('td');
        nTr.appendChild(nTdPrice);
    
        const nTextPrice = document.createTextNode(topping.price);
        nTdPrice.appendChild(nTextPrice);
    });


}

function calculatePrice(e) {
    const nCheckbox = e.target; // target me la la etiqueta que lanzo el evento
    // const toppindId = nCheckbox.value;
    const toppindId = nCheckbox.dataset.topping;

    const nPrice = document.getElementById('tParPrice');
    // const selectedTopping = toppings.find(topping => topping.id === toppindId);
    // totalPrice += selectedTopping.price;
    const price = parseFloat(nCheckbox.dataset.price);
    // if (nCheckbox.checked)
    //     totalPrice += price;
    // else
    //     totalPrice -= price;

    // nCheckbox.checked ? totalPrice += price : totalPrice -= price;
    totalPrice += nCheckbox.checked ? price : price * (-1);

    nPrice.textContent = totalPrice; // innerText  innerHTML  textContent
}