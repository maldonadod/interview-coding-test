const MEGA_COVERAGE = "Mega Coverage"
const FULL_COVERAGE = "Full Coverage"
const SPECIAL_FULL_COVERAGE = "Special Full Coverage"
const SUPER_SALE = "Super Sale"

class UpdateProduct {
  constructor(product) {
    this.product = product;
  }
  updateFullCoverage() {
    this.product.increasePrice()
    this.product.decreaseSellIn()
    this.product.ifSellIn(isLowerThan(0), () => this.product.increasePrice())
  }
  updateSpecialFullCoverage() {
    this.product.increasePrice()
    this.product.ifSellIn(isLowerOrEqualThan(10), () => this.product.increasePrice())
    this.product.ifSellIn(isLowerOrEqualThan(5), () => this.product.increasePrice())
    this.product.decreaseSellIn()
    this.product.ifSellIn(isLowerThan(0), () => this.product.dropPrice())
  }
  updateNormalProduct() {
    this.product.decreasePrice()
    this.product.decreaseSellIn()
    this.product.ifSellIn(isLowerThan(0), () => this.product.decreasePrice())
  }
  updateSuperSale() {
    this.product.decreaseSellIn()
    this.product.decreasePrice()
    this.product.decreasePrice()
  }
  execute() {
    if (this.product.isNamed(MEGA_COVERAGE)) {}
    else if (this.product.isNamed(FULL_COVERAGE)) this.updateFullCoverage()
    else if (this.product.isNamed(SPECIAL_FULL_COVERAGE)) this.updateSpecialFullCoverage()
    else if (this.product.isNamed(SUPER_SALE)) this.updateSuperSale()
    else this.updateNormalProduct()
  }
}

function isLowerThan(numberToCompare) {
  return sellIn => sellIn < numberToCompare
}
function isLowerOrEqualThan(numberToCompare) {
  return sellIn => sellIn <= numberToCompare
}

module.exports = UpdateProduct;