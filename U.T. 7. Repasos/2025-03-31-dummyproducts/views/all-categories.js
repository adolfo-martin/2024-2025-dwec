import DummyService from "../services/dummy.service.js";


document.addEventListener('DOMContentLoaded', async _ => {
    const service = new DummyService();
    const categories = await service.getCategories();
    renderCategories(categories);
});


function renderCategories(categories) {
    const nOl = document.querySelector('#tOlCategories');

    categories.forEach(async category => {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        nLi.textContent = category.name;

        const nOlAux = document.createElement('ol');
        nLi.appendChild(nOlAux);

        const service = new DummyService();
        const products = await service.getProductsByCategory(category.slug);
        renderProducts(products, nOlAux)
    });
}


function renderProducts(products, nOl) {
    products.forEach(async product => {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        nLi.textContent = product.title;
    });
}