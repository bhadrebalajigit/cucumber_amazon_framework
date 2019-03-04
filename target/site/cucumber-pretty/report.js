$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Home.feature");
formatter.feature({
  "line": 2,
  "name": "To Test Home page of Amazon website",
  "description": "",
  "id": "to-test-home-page-of-amazon-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Validate Hello Sign in menu",
  "description": "",
  "id": "to-test-home-page-of-amazon-website;validate-hello-sign-in-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@CurrentTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User navigate to Amazon site",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User clicked on Hello Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Home_page_sd.user_navigate_to_Amazon_site()"
});
formatter.result({
  "duration": 7978122765,
  "status": "passed"
});
formatter.match({
  "location": "Home_page_sd.user_clicked_on_Hello_Sign_in_button()"
});
formatter.result({
  "duration": 3565298157,
  "status": "passed"
});
formatter.match({
  "location": "Home_page_sd.close_the_browser()"
});
formatter.result({
  "duration": 53269,
  "status": "passed"
});
formatter.uri("Login.feature");
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
  "line": 13,
  "name": "User Logged in Amazon using Data Table with Data Value in Step it self",
  "description": "",
  "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;user-logged-in-amazon-using-data-table-with-data-value-in-step-it-self",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@CurrentTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User navigate to Amazon site",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User clicked on Hello Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Enter username and enter Password",
  "rows": [
    {
      "cells": [
        "bhadrebalaji@gmail.com",
        "jodha@123"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate logged user",
  "keyword": "Then "
});
formatter.match({
  "location": "Home_page_sd.user_navigate_to_Amazon_site()"
});
formatter.result({
  "duration": 6671736900,
  "status": "passed"
});
formatter.match({
  "location": "Home_page_sd.user_clicked_on_Hello_Sign_in_button()"
});
formatter.result({
  "duration": 4808222205,
  "status": "passed"
});
formatter.match({
  "location": "Login_page_sd.user_Enter_username_and_enter_Password(DataTable)"
});
formatter.result({
  "duration": 4849340067,
  "status": "passed"
});
formatter.match({
  "location": "Login_page_sd.validate_logged_user()"
});
formatter.result({
  "duration": 91577961,
  "status": "passed"
});
});