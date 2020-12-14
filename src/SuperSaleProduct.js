class SuperSaleProduct {
  constructor(product) {
    this.product = product;
    this.product.decreaseSellIn()
    this.product.decreasePrice()
    this.product.decreasePrice()
  }
  get name() {
    return this.product.name
  }
  get price() {
    return this.product.price
  }
  get sellIn() {
    return this.product.sellIn
  }
}

module.exports = SuperSaleProduct;