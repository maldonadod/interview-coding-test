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
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
    this.product = null;
  }
  updatesBeforeSellInDecreases() {
    if (this.isFullCoverage()) {
      this.product.increaseProductPrice()
    }
    else if (this.isSpecialFullCoverage()) {
      this.product.increaseProductPrice()
      if (this.product.sellIn <= 10) {
        this.product.increaseProductPrice()
      }
      if (this.product.sellIn <= 5) {
        this.product.increaseProductPrice()
      }
    }
    else {
      this.decreaseProductPrice()
    }
  }
  updatesAfterSellInDecreases() {
    if (this.product.sellIn < 0) {
      if (this.isFullCoverage()) {
        this.product.increaseProductPrice()
      } else {
        if (this.isSpecialFullCoverage()) {
          this.product.dropProductPrice();
        } else {
          this.decreaseProductPrice()
        }
      }
    }
  }
  updatePrice() {
    for (const product of this.products) {
      this.product = product
      
      this.updatesBeforeSellInDecreases();

      this.decreaseProductSellIn();

      this.updatesAfterSellInDecreases();
    }

    return this.products;
  }
  
  decreaseProductSellIn() {
    if (this.isNotMegaCoverage()) {
      this.product.sellIn = this.product.sellIn - 1;
    }
  }

  decreaseProductPrice() {
    if (this.isNotMegaCoverage()) {
      this.product.decreaseProductPrice();
    }
  }

  isSpecialFullCoverage() {
    return this.product.name == 'Special Full Coverage';
  }

  isNotMegaCoverage() {
    return this.product.name != 'Mega Coverage'
  }

  isFullCoverage() {
    return this.product.name == 'Full Coverage';
  }
}

module.exports = {
  Product,
  CarInsurance
}
