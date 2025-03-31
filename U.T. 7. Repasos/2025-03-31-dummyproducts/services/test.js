import DummyService from "./dummy.service.js";

const service = new DummyService();

// service.getCategories().then(console.log);
// console.log('FIN');

// console.log(await service.getCategories());
// console.log('FIN');

console.log((await service.getProductsByCategory('beauty'))[0]);
