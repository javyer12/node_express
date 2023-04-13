const { faker } = require('@faker-js/faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generateProduct();
  }
  generateProduct() {
    const limit = 20
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 20),
        image: faker.image.imageUrl()
      });
    }
  }
  create() { }
  find() {
    return this.products
  }
  findById(id) { return this.products.find(item => item.id === id); }
  update() { }
  delete() { }
}


module.exports = ProductService;
