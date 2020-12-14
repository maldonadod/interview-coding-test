const Product = require("./Product");
const UpdateProduct = require("./UpdateProduct");

class CarInsurance {
  constructor(products) {
    this.products = products;
  }
  updatePrice() {
    for (const product of this.products) {
      new UpdateProduct(product).execute();
    }
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
