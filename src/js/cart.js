class Cart {
  constructor(taxRate) {
    this.taxRate = taxRate;
    this.subtotal = 0;
    this.products = [];
  }

  clear() {
    this.subtotal = 0;
    this.products = [];
  }

  get total() {
    return this.calcTotal();
  }

  calcTotal() {
    return accounting.formatMoney(this.subtotal * (1 + this.taxRate));
  }

  get numberOfProducts() {
    return this.countProducts();
  }

  countProducts() {
    return this.products.length;
  }

  setProductQuantity(index, quantity) {
    if (this.products[index]) {
      if (quantity) {
        if (this.products[index].quantity > quantity) {
          this.subtotal = this.subtotal - (this.products[index].quantity - quantity) * this.products[index].price;
          this.products[index].quantity = quantity;
        } else if (this.products[index].quantity < quantity) {
          this.subtotal = this.subtotal + (quantity - this.products[index].quantity) * this.products[index].price;
          this.products[index].quantity = quantity;
        }
      } else if (quantity === 0) {
        this.subtotal = this.subtotal - this.products[index].quantity * this.products[index].price;
        this.products[index] = null;
      } else {
        this.subtotal = this.subtotal + this.products[index].price;
        this.products[index].quantity = this.products[index].quantity + 1;
      }
    } else {
      this.products[index] = flowers[index];
      this.subtotal = this.subtotal + flowers[index].price;
    }
  }
}
