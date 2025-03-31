export default class DummyService {
    async getCategories() {
        const url = 'https://dummyjson.com/products/categories/?delay=2000';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async getProductsByCategory(categoryId) {
        const url = `https://dummyjson.com/products/category/${categoryId}/?delay=2000`;
        const response = await fetch(url);
        const data = await response.json();
        return data.products;
    }
}