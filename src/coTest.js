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
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      const product = this.products[i]
      if (product.name != 'Full Coverage' && product.name != 'Special Full Coverage') {
        if (product.price > 0) {
          if (product.name != 'Mega Coverage') {
            product.price = product.price - 1;
          }
        }
      } else {
        if (product.price < 50) {
          product.price = product.price + 1;
          if (product.name == 'Special Full Coverage') {
            if (product.sellIn < 11) {
              if (product.price < 50) {
                product.price = product.price + 1;
              }
            }
            if (product.sellIn < 6) {
              if (product.price < 50) {
                product.price = product.price + 1;
              }
            }
          }
        }
      }
      if (product.name != 'Mega Coverage') {
        product.sellIn = product.sellIn - 1;
      }
      if (product.sellIn < 0) {
        if (product.name != 'Full Coverage') {
          if (product.name != 'Special Full Coverage') {
            if (product.price > 0) {
              if (product.name != 'Mega Coverage') {
                product.price = product.price - 1;
              }
            }
          } else {
            product.price = product.price - product.price;
          }
        } else {
          if (product.price < 50) {
            product.price = product.price + 1;
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
