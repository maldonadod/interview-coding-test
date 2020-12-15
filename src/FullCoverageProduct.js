class FullCoverageProduct {
  constructor(product) {
    this.product = product;
    this.product.increasePrice()
    this.product.decreaseSellIn()
    this.product.ifSellInIsLowerThan(0, () => this.product.increasePrice())
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

module.exports = FullCoverageProduct;