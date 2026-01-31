export default new (class AddToCartPage {
  itemLocator = ".inventory_item";
  cartBadgeNumbLocator = ".shopping_cart_badge";
  cartLocator = ".shopping_cart_link";
  productInCartLocator = ".cart_item";
  productPriceLocator = ".inventory_item_price";
  productQuantityLocator=".cart_quantity"
  addToCart(product) {
    cy.get(this.itemLocator)
      .contains(product)
      .parents(this.itemLocator)
      .contains("Add to cart")
      .click();
  }
  verifNumb(count) {
    cy.get(this.cartBadgeNumbLocator).should("contain", count);
  }
  visitCart() {
    cy.get(this.cartLocator).click();
  }
  verifCartItems(dataTable) {
    const products = dataTable.hashes();
    products.forEach(product => {
  cy.contains(this.productInCartLocator, product.name)
    .within(() => {
      cy.get(this.productPriceLocator).should("have.text", product.price);
      cy.get(this.productQuantityLocator).should("have.text", product.quantity);
    });
});

  }
})();
