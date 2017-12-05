'use strict';

class Cart {
  constructor(taxRate, subtotal, paymentMethod) {
    this.taxRate = taxRate;
    this.subtotal = subtotal;
    this.paymentMethod = paymentMethod;
    this.products = [];
  }

  total() {
    return this.subtotal + this.taxRate;
  }

  numberOfProducts() {
    return this.products.length;
  }

  removeProduct(product) {
    var flower = this.products.filter(function(item) {
      if (item.name !== this.product.name )
          {
            return true;
          }
    });

  }
}