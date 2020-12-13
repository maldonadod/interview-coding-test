const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("test 1", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("foo");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(0);
  });
  it("test 2", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 10) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("foo");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(8);
  });
  it("test 3", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 2, 10) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(1);
    expect(products[0].price).equal(11);
  });
  it("test 4", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 0, 8) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(10);
  });
  it("test 5", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 0, 50) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(50);
  });
  it("test 6", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 0, 80) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });
  it("test 7", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 0, 80) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(0);
  });
  it("test 8", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 10, 40) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(42);
  });
  it("test 9", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 5, 40) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(43);
  });
  it("test 10", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 11, 45) ]);

    const products = coTest.updatePrice();

    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(10);
    expect(products[0].price).equal(46);
  });

});
