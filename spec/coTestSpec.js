const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should price never be negative", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("foo");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(0);
  });
  it("should price decrease twice when sell in is bellow zero", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 10) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("foo");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(8);
  });
  it("should Full Coverage price increase when sell in decrease", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 2, 10) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(1);
    expect(products[0].price).equal(11);
  });
  it("should Full Coverage price increase twice when sell in decrease bellow zero", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 0, 8) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(10);
  });
  it("should Full Coverage not increase when price is greater or equal than 50", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 0, 50) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(50);
  });
  it("should Mega Coverage do not alter price nor sell in", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 0, 80) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });
  it("should Special Full Coverage drop price to zero when sell in is zero", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 0, 80) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(0);
  });
  it("should Special Full Coverage increase price twice when sell in is 10 or bellow", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 10, 40) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(42);
  });
  it("should Special Full Coverage increase price thrice when sell in is 5 or bellow", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 5, 40) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(43);
  });
  it("should Special Full Coverage increase price when sell in decreases and is greater than 10", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 11, 24) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(10);
    expect(products[0].price).equal(25);
  });

});
