class NormalProduct {
  constructor(product) {
    this.product = product;
    this.product.decreasePrice()
    this.product.decreaseSellIn()
    this.product.ifSellInIsLowerThan(0, () => this.product.decreasePrice())
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

module.exports = NormalProduct;