class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  increaseProductPrice() {
    if (this.productHasNotRichMaximumPrice()) {
      this.price = this.price + 1;
    }
  }
  decreaseProductPrice() {
    if (this.isProductPriceNonNegative()) {
      this.price = this.price - 1;
    }
  }
  productHasNotRichMaximumPrice() {
    return this.price < 50
  }
  dropProductPrice() {
    this.price = this.price - this.price;
  }
  isProductPriceNonNegative() {
    return this.price > 0
  }
  decreaseProductSellIn() {
    this.sellIn = this.sellIn - 1;
  }
  isSellInBellowZero() {
    return this.sellIn < 0
  }
  isNamed(potentialName) {
    return this.name === potentialName
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (const product of this.products) {
      new ProductEvaluator(product).execute();
    }
    return this.products;
  }
}

class ProductEvaluator {
  constructor(product) {
    this.product = product;
  }
  updateFullCoverage() {
    this.product.increaseProductPrice()
    this.product.decreaseProductSellIn()
    if (this.product.isSellInBellowZero()) {
      this.product.increaseProductPrice()
    }
  }
  updateSpecialFullCoverage() {
    this.product.increaseProductPrice()
    if (this.product.sellIn <= 10) {
      this.product.increaseProductPrice()
    }
    if (this.product.sellIn <= 5) {
      this.product.increaseProductPrice()
    }
    this.product.decreaseProductSellIn()
    if (this.product.isSellInBellowZero()) {
      this.product.dropProductPrice();
    }
  }
  updateNormalProduct() {
    this.product.decreaseProductPrice()
    this.product.decreaseProductSellIn()
    if (this.product.isSellInBellowZero()) {
      this.product.decreaseProductPrice()
    }
  }
  execute() {
    if (this.product.isNamed("Mega Coverage")) {}
    else if (this.product.isNamed("Full Coverage")) this.updateFullCoverage()
    else if (this.product.isNamed("Special Full Coverage")) this.updateSpecialFullCoverage()
    else this.updateNormalProduct()
  }
}

module.exports = {
  Product,
  CarInsurance
}
