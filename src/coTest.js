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
        if (this.product.price > 0) {
          if (this.isNotMegaCoverage()) {
            this.product.price = this.product.price - 1;
          }
        }
      } else {
        if (this.hasProductRichMaximumPrice()) {
          this.product.price = this.product.price + 1;
          if (this.isSpecialFullCoverage()) {
            if (this.product.sellIn < 11) {
              if (this.hasProductRichMaximumPrice()) {
                this.product.price = this.product.price + 1;
              }
            }
            if (this.product.sellIn < 6) {
              if (this.hasProductRichMaximumPrice()) {
                this.product.price = this.product.price + 1;
              }
            }
          }
        }
      }
      if (this.isNotMegaCoverage()) {
        this.product.sellIn = this.product.sellIn - 1;
      }
      if (this.product.sellIn < 0) {
        if (this.isNotFullCoverage()) {
          if (this.isNotSpecialFullCoverage()) {
            if (this.product.price > 0) {
              if (this.isNotMegaCoverage()) {
                this.product.price = this.product.price - 1;
              }
            }
          } else {
            this.product.price = this.product.price - this.product.price;
          }
        } else {
          if (this.hasProductRichMaximumPrice()) {
            this.product.price = this.product.price + 1;
          }
        }
      }
    }

    return this.products;
  }

  hasProductRichMaximumPrice() {
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
