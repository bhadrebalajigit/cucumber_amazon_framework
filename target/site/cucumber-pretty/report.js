$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "To test login of amazon page using different data driven testing",
  "description": "",
  "id": "to-test-login-of-amazon-page-using-different-data-driven-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "User Logged in Amazon using Data Table",
  "description": "",
  "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;user-logged-in-amazon-using-data-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigate to Amazon site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter \"username\" And  \tEnter \"Password\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Validate logged user",
  "keyword": "Then "
});
formatter.match({
  "location": "Home_page_sd.user_navigate_to_Amazon_site()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 7
    },
    {
      "val": "Password",
      "offset": 30
    }
  ],
  "location": "Login_page_sd.enter_And_Enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_page_sd.validate_logged_user()"
});
formatter.result({
  "status": "skipped"
});
});