class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
    this.product = null;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      this.product = this.products[i]
      if (this.isNotFullCoverage() && this.isNotSpecialFullCoverage()) {
        if (this.isProductPriceNonNegative()) {
          if (this.isNotMegaCoverage()) {
            this.decreaseProductPrice()
          }
        }
      } else {
        this.increaseProductPrice()
        if (this.isSpecialFullCoverage()) {
          if (this.product.sellIn < 11) {
            this.increaseProductPrice()
          }
          if (this.product.sellIn < 6) {
            this.increaseProductPrice()
          }
        }
      }
      if (this.isNotMegaCoverage()) {
        this.decreaseProductSellIn();
      }
      if (this.product.sellIn < 0) {
        if (this.isNotFullCoverage()) {
          if (this.isNotSpecialFullCoverage()) {
            if (this.isProductPriceNonNegative()) {
              if (this.isNotMegaCoverage()) {
                this.decreaseProductPrice()
              }
            }
          } else {
            this.dropProductPrice();
          }
        } else {
          this.increaseProductPrice()
        }
      }
    }

    return this.products;
  }

  increaseProductPrice() {
    if (this.productHasNotRichMaximumPrice()) {
      this.product.price = this.product.price + 1;
    }
  }
  
  decreaseProductSellIn() {
    this.product.sellIn = this.product.sellIn - 1;
  }

  dropProductPrice() {
    this.product.price = this.product.price - this.product.price;
  }

  decreaseProductPrice() {
    this.product.price = this.product.price - 1;
  }
  
  isProductPriceNonNegative() {
    return this.product.price > 0
  }
  
  productHasNotRichMaximumPrice() {
    return this.product.price < 50
  }

  isSpecialFullCoverage() {
    return this.product.name == 'Special Full Coverage';
  }

  isNotMegaCoverage() {
    return this.product.name != 'Mega Coverage'
  }

  isNotSpecialFullCoverage() {
    return this.product.name != 'Special Full Coverage';
  }

  isNotFullCoverage() {
    return this.product.name != 'Full Coverage';
  }
}

module.exports = {
  Product,
  CarInsurance
}
