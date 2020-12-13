const MAX_PRICE = 50
const PRICE_INCREMENT_UNIT = 1
const PRICE_DECREMENT_UNIT = 1
const SELL_IN_DECREMENT_UNIT = 1

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  increasePrice() {
    if (this.price < MAX_PRICE) {
      this.price = this.price + PRICE_INCREMENT_UNIT;
    }
  }
  decreasePrice() {
    if (isPositive(this.price)) {
      this.price = this.price - PRICE_DECREMENT_UNIT;
    }
  }
  dropPrice() {
    this.price = this.price - this.price;
  }
  decreaseSellIn() {
    this.sellIn = this.sellIn - SELL_IN_DECREMENT_UNIT;
  }
  isNamed(potentialName) {
    return this.name === potentialName
  }
  ifSellIn(matcher, action) {
    if (matcher(this.sellIn)) action()
  }
}

const isPositive = price => price > 0

module.exports = Product;