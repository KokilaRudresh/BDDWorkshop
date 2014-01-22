$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FilterProducts.feature");
formatter.feature({
  "id": "filter-products",
  "description": "As a shopper I want to filter out products based on various criteria in the catalogue so that it is easy for me to look for a product",
  "name": "Filter Products",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "filter-products;filter-by-brand;;2",
  "tags": [
    {
      "name": "@Filter",
      "line": 4
    }
  ],
  "description": "",
  "name": "Filter by Brand",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I filter by category \"Bags\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I should see products belong to Category \"Bags\" in the results",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 10138355000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags",
      "offset": 22
    }
  ],
  "location": "FilterSteps.I_filter_by_category(String)"
});
formatter.result({
  "duration": 850196000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags",
      "offset": 42
    }
  ],
  "location": "FilterSteps.I_should_see_products_with_category_in_the_results(String)"
});
formatter.result({
  "duration": 58479000,
  "status": "passed"
});
formatter.scenario({
  "id": "filter-products;filter-by-brand;;3",
  "tags": [
    {
      "name": "@Filter",
      "line": 4
    }
  ],
  "description": "",
  "name": "Filter by Brand",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I filter by category \"Bags\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I should see products belong to Category \"Bags\" in the results",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3105855000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags",
      "offset": 22
    }
  ],
  "location": "FilterSteps.I_filter_by_category(String)"
});
formatter.result({
  "duration": 897997000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags",
      "offset": 42
    }
  ],
  "location": "FilterSteps.I_should_see_products_with_category_in_the_results(String)"
});
formatter.result({
  "duration": 64992000,
  "status": "passed"
});
formatter.scenario({
  "id": "filter-products;filter-by-brand;;4",
  "tags": [
    {
      "name": "@Filter",
      "line": 4
    }
  ],
  "description": "",
  "name": "Filter by Brand",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I filter by category \"Bags\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I should see products belong to Category \"Bags\" in the results",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3175920000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags",
      "offset": 22
    }
  ],
  "location": "FilterSteps.I_filter_by_category(String)"
});
formatter.result({
  "duration": 903833000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags",
      "offset": 42
    }
  ],
  "location": "FilterSteps.I_should_see_products_with_category_in_the_results(String)"
});
formatter.result({
  "duration": 52093000,
  "status": "passed"
});
formatter.scenario({
  "id": "filter-products;filter-by-brand-and-see-price-range",
  "tags": [
    {
      "name": "@Filter",
      "line": 16
    }
  ],
  "description": "",
  "name": "Filter by Brand and see Price Range",
  "keyword": "Scenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "I filter by category \"Bags\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "I should see the filter for price range",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 3171268000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags",
      "offset": 22
    }
  ],
  "location": "FilterSteps.I_filter_by_category(String)"
});
formatter.result({
  "duration": 793329000,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.I_should_see_the_filter_for_price_range()"
});
formatter.result({
  "duration": 17552000,
  "status": "passed"
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
  "duration": 3222084000,
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
  "duration": 893090000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_be_navigated_to_Login_Page()"
});
formatter.result({
  "duration": 19244000,
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
  "duration": 3190504000,
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
  "duration": 705177000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_enter_credentials_and_continue()"
});
formatter.result({
  "duration": 1116295000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_be_able_to_Login()"
});
formatter.result({
  "duration": 25922000,
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
  "duration": 3244302000,
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
  "duration": 838553000,
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
  "duration": 281709000,
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
  "duration": 2941997000,
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
  "duration": 984559000,
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
  "duration": 287021000,
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
  "duration": 3251463000,
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
  "duration": 962563000,
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
  "duration": 89555000,
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
  "duration": 3311012000,
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
  "duration": 890866000,
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
  "duration": 43861000,
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
  "duration": 3463553000,
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
  "duration": 929010000,
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
  "duration": 44830000,
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
  "duration": 3388376000,
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
  "duration": 1170475000,
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
  "duration": 48547000,
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
  "duration": 3508336000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.I_add_the_following_products(Product\u003e)"
});
formatter.result({
  "duration": 11264586000,
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
  "duration": 9516000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.I_should_be_able_to_checkout_as_Guest()"
});
formatter.result({
  "duration": 3656860000,
  "status": "passed"
});
});