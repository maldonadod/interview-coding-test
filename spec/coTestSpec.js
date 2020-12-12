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

});
