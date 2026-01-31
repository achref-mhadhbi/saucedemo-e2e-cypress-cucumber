Feature: Cart Management

  Scenario: Add products to cart and verify badge
    Given I am logged in with valid credentials
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    Then the cart badge should show 2 items
    When I navigate to the shopping cart
    Then I should see these products in the cart:
      | name                  | price | quantity  |
      | Sauce Labs Backpack   | $29.99| 1         |
      | Sauce Labs Bike Light | $9.99 | 1         |