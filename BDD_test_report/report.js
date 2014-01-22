$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FilterProducts.feature");
formatter.feature({
  "id": "filter-products",
  "description": "As a shopper I want to filter out products based on various criteria in the catalogue so that it is easy for me to look for a product",
  "name": "Filter Products",
  "keyword": "Feature",
  "line": 1
});
formatter.uri("Login.feature");
formatter.feature({
  "id": "",
  "description": "As a User\nI should be able to Login to the application\nSo that I can search for items and save it in cart",
  "name": "",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 6,
  "type": "background"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 7
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 9927799000,
  "status": "passed"
});
formatter.scenario({
  "id": ";as-a-user-i-should-be-able-to-navigate-to-the-login-page-on-clicking-the-login-link",
  "description": "",
  "name": "As a User I should be able to navigate to the Login Page on clicking the Login Link",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "I should be navigated to Login Page",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "LoginSteps.I_click_on_the_Login_Link()"
});
formatter.result({
  "duration": 673080000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_be_navigated_to_Login_Page()"
});
formatter.result({
  "duration": 28447000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 6,
  "type": "background"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 7
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3382980000,
  "status": "passed"
});
formatter.scenario({
  "id": ";as-a-user-i-should-be-able-to-login-to-the-app-by-entering-credentials",
  "description": "",
  "name": "As a User I should be able to Login to the app by entering credentials",
  "keyword": "Scenario",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I enter credentials and continue",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I should be able to Login",
  "keyword": "Then ",
  "line": 16
});
formatter.match({
  "location": "LoginSteps.I_click_on_the_Login_Link()"
});
formatter.result({
  "duration": 757367000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_enter_credentials_and_continue()"
});
formatter.result({
  "duration": 985760000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_be_able_to_Login()"
});
formatter.result({
  "duration": 29492000,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "id": "",
  "description": "As a shopper I want to search for a product from home page across All Departments",
  "name": "",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": ";search-for-a-product-and-verify-the-result-and-result-count",
  "description": "",
  "name": "Search for a Product and verify the result and result count",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for product \"rails\"",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should see product with name \"rails\" in the results with the count of \"7\"",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3438454000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rails",
      "offset": 22
    }
  ],
  "location": "SearchSteps.I_search_for_product(String)"
});
formatter.result({
  "duration": 1205462000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rails",
      "offset": 32
    },
    {
      "val": "7",
      "offset": 73
    }
  ],
  "location": "SearchSteps.I_should_see_item_in_the_results_with_the_count_of(String,String)"
});
formatter.result({
  "duration": 368875000,
  "status": "passed"
});
formatter.scenario({
  "id": ";search-for-multiple-products-and-verify-the-results;;2",
  "description": "",
  "name": "Search for multiple products and verify the results",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I search for product \"rails\"",
  "keyword": "When ",
  "line": 12,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should see product with name \"rails\" in the results with the count of \"7\"",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 4765801000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rails",
      "offset": 22
    }
  ],
  "location": "SearchSteps.I_search_for_product(String)"
});
formatter.result({
  "duration": 878997000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rails",
      "offset": 32
    },
    {
      "val": "7",
      "offset": 73
    }
  ],
  "location": "SearchSteps.I_should_see_item_in_the_results_with_the_count_of(String,String)"
});
formatter.result({
  "duration": 276892000,
  "status": "passed"
});
formatter.scenario({
  "id": ";search-for-multiple-products-and-verify-the-results;;3",
  "description": "",
  "name": "Search for multiple products and verify the results",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I search for product \"tote\"",
  "keyword": "When ",
  "line": 12,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should see product with name \"tote\" in the results with the count of \"2\"",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3514863000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tote",
      "offset": 22
    }
  ],
  "location": "SearchSteps.I_search_for_product(String)"
});
formatter.result({
  "duration": 937561000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tote",
      "offset": 32
    },
    {
      "val": "2",
      "offset": 72
    }
  ],
  "location": "SearchSteps.I_should_see_item_in_the_results_with_the_count_of(String,String)"
});
formatter.result({
  "duration": 88175000,
  "status": "passed"
});
formatter.scenario({
  "id": ";search-for-product-by-category;;2",
  "tags": [
    {
      "name": "@smoke",
      "line": 21
    }
  ],
  "description": "",
  "name": "Search for product by category",
  "keyword": "Scenario Outline",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 23
});
formatter.step({
  "name": "I click on Product Category \"Bags\"",
  "keyword": "When ",
  "line": 24,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should see all Products with Category \"Bags\" in the results with the count of \"4\"",
  "keyword": "Then ",
  "line": 25,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3918199000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags",
      "offset": 29
    }
  ],
  "location": "SearchSteps.I_click_on_Product_Category(String)"
});
formatter.result({
  "duration": 137444000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags",
      "offset": 41
    },
    {
      "val": "4",
      "offset": 81
    }
  ],
  "location": "SearchSteps.I_should_see_all_Products_with_Category_in_the_results_with_the_count_of(String,String)"
});
formatter.result({
  "duration": 841848000,
  "status": "passed"
});
formatter.scenario({
  "id": ";search-for-product-by-category;;3",
  "tags": [
    {
      "name": "@smoke",
      "line": 21
    }
  ],
  "description": "",
  "name": "Search for product by category",
  "keyword": "Scenario Outline",
  "line": 30,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 23
});
formatter.step({
  "name": "I click on Product Category \"Mugs\"",
  "keyword": "When ",
  "line": 24,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should see all Products with Category \"Mugs\" in the results with the count of \"4\"",
  "keyword": "Then ",
  "line": 25,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3437781000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mugs",
      "offset": 29
    }
  ],
  "location": "SearchSteps.I_click_on_Product_Category(String)"
});
formatter.result({
  "duration": 985897000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mugs",
      "offset": 41
    },
    {
      "val": "4",
      "offset": 81
    }
  ],
  "location": "SearchSteps.I_should_see_all_Products_with_Category_in_the_results_with_the_count_of(String,String)"
});
formatter.result({
  "duration": 34428000,
  "status": "passed"
});
formatter.scenario({
  "id": ";search-for-product-by-category;;4",
  "tags": [
    {
      "name": "@smoke",
      "line": 21
    }
  ],
  "description": "",
  "name": "Search for product by category",
  "keyword": "Scenario Outline",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 23
});
formatter.step({
  "name": "I click on Product Category \"Clothing\"",
  "keyword": "When ",
  "line": 24,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should see all Products with Category \"Clothing\" in the results with the count of \"16\"",
  "keyword": "Then ",
  "line": 25,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3370109000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Clothing",
      "offset": 29
    }
  ],
  "location": "SearchSteps.I_click_on_Product_Category(String)"
});
formatter.result({
  "duration": 1052045000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Clothing",
      "offset": 41
    },
    {
      "val": "16",
      "offset": 85
    }
  ],
  "location": "SearchSteps.I_should_see_all_Products_with_Category_in_the_results_with_the_count_of(String,String)"
});
formatter.result({
  "duration": 39977000,
  "status": "passed"
});
formatter.uri("ShoppingList.feature");
formatter.feature({
  "id": "",
  "description": "As a shopper I want to search, add one or more products to shopping cart and buy them",
  "name": "",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": ";adding-more-than-one-items-to-shopping-cart-and-verifying-the-details",
  "tags": [
    {
      "name": "@smoke",
      "line": 4
    }
  ],
  "description": "",
  "name": "Adding more than one items to shopping cart and verifying the details",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I add the following products",
  "keyword": "When ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "category",
        "productName",
        "quantity"
      ],
      "line": 8
    },
    {
      "cells": [
        "Bags",
        "Ruby on Rails Tote",
        "1"
      ],
      "line": 9
    },
    {
      "cells": [
        "Mugs",
        "Ruby on Rails Mug",
        "2"
      ],
      "line": 10
    },
    {
      "cells": [
        "Clothing",
        "Spree Baseball Jersey",
        "3"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I should see \"6\" Items in the Cart of Price \"103.94\"",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I should be able to checkout as Guest",
  "keyword": "And ",
  "line": 13
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3391080000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.I_add_the_following_products(Product\u003e)"
});
formatter.result({
  "duration": 9993669000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 14
    },
    {
      "val": "103.94",
      "offset": 45
    }
  ],
  "location": "ShoppingCartSteps.I_should_see_Items_in_the_Cart_of_Price(String,String)"
});
formatter.result({
  "duration": 6506000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.I_should_be_able_to_checkout_as_Guest()"
});
formatter.result({
  "duration": 3255129000,
  "status": "passed"
});
});