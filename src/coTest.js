const Product = require("./Product");
const UpdateProduct = require("./UpdateProduct");

class CarInsurance {
  constructor(products) {
    this.products = products;
  }
  updatePrice() {
    const products = []
    for (const product of this.products) {
      products.push(new UpdateProduct(product).execute());
    }
    return products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
