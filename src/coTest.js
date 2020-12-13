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
      if (this.product.name != 'Full Coverage' && this.product.name != 'Special Full Coverage') {
        if (this.product.price > 0) {
          if (this.product.name != 'Mega Coverage') {
            this.product.price = this.product.price - 1;
          }
        }
      } else {
        if (this.product.price < 50) {
          this.product.price = this.product.price + 1;
          if (this.product.name == 'Special Full Coverage') {
            if (this.product.sellIn < 11) {
              if (this.product.price < 50) {
                this.product.price = this.product.price + 1;
              }
            }
            if (this.product.sellIn < 6) {
              if (this.product.price < 50) {
                this.product.price = this.product.price + 1;
              }
            }
          }
        }
      }
      if (this.product.name != 'Mega Coverage') {
        this.product.sellIn = this.product.sellIn - 1;
      }
      if (this.product.sellIn < 0) {
        if (this.product.name != 'Full Coverage') {
          if (this.product.name != 'Special Full Coverage') {
            if (this.product.price > 0) {
              if (this.product.name != 'Mega Coverage') {
                this.product.price = this.product.price - 1;
              }
            }
          } else {
            this.product.price = this.product.price - this.product.price;
          }
        } else {
          if (this.product.price < 50) {
            this.product.price = this.product.price + 1;
          }
        }
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
