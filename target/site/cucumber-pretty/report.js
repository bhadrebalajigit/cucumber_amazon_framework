$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/qa/Features/Home.feature");
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
  "duration": 29169440152,
  "status": "passed"
});
formatter.match({
  "location": "Home_page_sd.user_clicked_on_Hello_Sign_in_button()"
});
formatter.result({
  "duration": 3767850248,
  "status": "passed"
});
formatter.match({
  "location": "Home_page_sd.close_the_browser()"
});
formatter.result({
  "duration": 42518,
  "status": "passed"
});
formatter.uri("com/qa/Features/Login.feature");
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
  "duration": 29444377327,
  "status": "passed"
});
formatter.match({
  "location": "Home_page_sd.user_clicked_on_Hello_Sign_in_button()"
});
formatter.result({
  "duration": 4453656162,
  "status": "passed"
});
formatter.match({
  "location": "Login_page_sd.user_Enter_username_and_enter_Password(DataTable)"
});
formatter.result({
  "duration": 15215607073,
  "status": "passed"
});
formatter.match({
  "location": "Login_page_sd.validate_logged_user()"
});
formatter.result({
  "duration": 20195240162,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027nav-tools\u0027]/a[@id\u003d\u0027nav-link-yourAccount\u0027]/span[@class\u003d\u0027nav-line-1\u0027]\"}\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027HP-HP\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49516}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.121, webStorageEnabled: true}\nSession ID: bf426051f3f44efaa6fc0e22611fc825\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027nav-tools\u0027]/a[@id\u003d\u0027nav-link-yourAccount\u0027]/span[@class\u003d\u0027nav-line-1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy13.getText(Unknown Source)\r\n\tat com.qa.pages.Login_page.validate_logged_user(Login_page.java:38)\r\n\tat com.qa.StepDefinitions.Login_page_sd.validate_logged_user(Login_page_sd.java:53)\r\n\tat ✽.Then Validate logged user(com/qa/Features/Login.feature:18)\r\n",
  "status": "failed"
});
});