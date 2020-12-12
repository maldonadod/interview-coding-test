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

});
