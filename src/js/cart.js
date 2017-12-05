'use strict';

class Cart {
  constructor(taxRate, subtotal, paymentMethod) {
    this.taxRate = taxRate;
    this.subtotal = 0;
    this.paymentMethod = "";
    this.products = [];
  }

  total() {
    return this.subtotal + this.taxRate;
  }

  numberOfProducts() {
    return this.products.length;
  }

  removeProduct(index) {
    var removedProduct = this.products.splice(index).shift();
    this.subtotal = this.subtotal - removedProduct.price;
  }

  addProduct(product) {
    this.products.push(product);
    this.subtotal = this.subtotal + product.price;
  }
}