const MEGA_COVERAGE = "Mega Coverage"
const FULL_COVERAGE = "Full Coverage"
const SPECIAL_FULL_COVERAGE = "Special Full Coverage"
const SUPER_SALE = "Super Sale"

const FullCoverageProduct = require("./FullCoverageProduct");
const SpecialFullCoverageProduct = require("./SpecialFullCoverageProduct");
const NormalProduct = require("./NormalProduct");
const SuperSaleProduct = require("./SuperSaleProduct");

class UpdateProduct {
  constructor(product) {
    this.product = product;
  }
  newFullCoverage(product) {
    return new FullCoverageProduct(product)
  }
  newSpecialFullCoverage(product) {
    return new SpecialFullCoverageProduct(product)
  }
  newNormalProduct(product) {
    return new NormalProduct(product)
  }
  newSuperSale(product) {
    return new SuperSaleProduct(product)
  }
  newMegaCoverage(product) {
    return product
  }
  execute() {
    if (this.product.isNamed(MEGA_COVERAGE)) return this.newMegaCoverage(this.product)
    else if (this.product.isNamed(FULL_COVERAGE)) return this.newFullCoverage(this.product)
    else if (this.product.isNamed(SPECIAL_FULL_COVERAGE)) return this.newSpecialFullCoverage(this.product)
    else if (this.product.isNamed(SUPER_SALE)) return this.newSuperSale(this.product)
    else return this.newNormalProduct(this.product)
  }
}

module.exports = UpdateProduct;