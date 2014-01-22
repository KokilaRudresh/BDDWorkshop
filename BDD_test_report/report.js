$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
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
formatter.scenario({
  "id": ";as-a-user-i-should-be-able-to-navigate-to-the-login-page-on-clicking-the-login-link",
  "tags": [
    {
      "name": "@coke",
      "line": 9
    }
  ],
  "description": "",
  "name": "As a User I should be able to navigate to the Login Page on clicking the Login Link",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I launch the app",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I should be navigated to Login Page",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "LoginSteps.I_launch_the_app()"
});
formatter.result({
  "duration": 10568222000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_click_on_the_Login_Link()"
});
formatter.result({
  "duration": 661460000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_be_navigated_to_Login_Page()"
});
formatter.result({
  "duration": 1660000,
  "status": "failed",
  "error_message": "junit.framework.AssertionFailedError: Fail\n\tat junit.framework.Assert.fail(Assert.java:57)\n\tat steps.LoginSteps.I_should_be_navigated_to_Login_Page(LoginSteps.java:38)\n\tat ✽.Then I should be navigated to Login Page(Login.feature:13)\n"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 151510000,
  "status": "passed"
});
});