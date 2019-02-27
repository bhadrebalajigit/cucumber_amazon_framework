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
formatter.scenarioOutline({
  "line": 21,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Loginwithscenariooutline"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigate to Amazon site",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User clicked on Hello Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "\"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate logged user",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 27,
      "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "bhadrebalaji@gmail.com",
        "jodha@123"
      ],
      "line": 28,
      "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "tupekarsupriya@gmail.com",
        "jodha@123"
      ],
      "line": 29,
      "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;successful-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "bhadrebalaji@gmail.com",
        "jodha@123"
      ],
      "line": 30,
      "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;successful-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 20,
      "name": "@Loginwithscenariooutline"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigate to Amazon site",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User clicked on Hello Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "\"bhadrebalaji@gmail.com\" and \"jodha@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate logged user",
  "keyword": "And "
});
formatter.match({
  "location": "Home_page_sd.user_navigate_to_Amazon_site()"
});
formatter.result({
  "duration": 42003984533,
  "status": "passed"
});
formatter.match({
  "location": "Home_page_sd.user_clicked_on_Hello_Sign_in_button()"
});
formatter.result({
  "duration": 6741577158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhadrebalaji@gmail.com",
      "offset": 1
    },
    {
      "val": "jodha@123",
      "offset": 30
    }
  ],
  "location": "Login_page_sd.and(String,String)"
});
formatter.result({
  "duration": 15011395480,
  "status": "passed"
});
formatter.match({
  "location": "Login_page_sd.validate_logged_user()"
});
formatter.result({
  "duration": 64484141,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 20,
      "name": "@Loginwithscenariooutline"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigate to Amazon site",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User clicked on Hello Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "\"tupekarsupriya@gmail.com\" and \"jodha@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate logged user",
  "keyword": "And "
});
formatter.match({
  "location": "Home_page_sd.user_navigate_to_Amazon_site()"
});
formatter.result({
  "duration": 22834618667,
  "status": "passed"
});
formatter.match({
  "location": "Home_page_sd.user_clicked_on_Hello_Sign_in_button()"
});
formatter.result({
  "duration": 20054944818,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027nav-line-1\u0027 and contains(text(),\u0027Hello, Sign in\u0027)]\"}\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027HP-HP\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:55584}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.109, webStorageEnabled: true}\nSession ID: 775ce39018f7a1852b0360f8107b1b06\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027nav-line-1\u0027 and contains(text(),\u0027Hello, Sign in\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat com.qa.pages.Home_page.Hello_signin_button(Home_page.java:68)\r\n\tat com.qa.StepDefinitions.Home_page_sd.user_clicked_on_Hello_Sign_in_button(Home_page_sd.java:63)\r\n\tat ✽.When User clicked on Hello Sign in button(Login.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "tupekarsupriya@gmail.com",
      "offset": 1
    },
    {
      "val": "jodha@123",
      "offset": 32
    }
  ],
  "location": "Login_page_sd.and(String,String)"
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
formatter.scenario({
  "line": 30,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "to-test-login-of-amazon-page-using-different-data-driven-testing;successful-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 20,
      "name": "@Loginwithscenariooutline"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigate to Amazon site",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User clicked on Hello Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "\"bhadrebalaji@gmail.com\" and \"jodha@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate logged user",
  "keyword": "And "
});
formatter.match({
  "location": "Home_page_sd.user_navigate_to_Amazon_site()"
});
formatter.result({
  "duration": 44612351808,
  "status": "passed"
});
formatter.match({
  "location": "Home_page_sd.user_clicked_on_Hello_Sign_in_button()"
});
formatter.result({
  "duration": 21210180816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhadrebalaji@gmail.com",
      "offset": 1
    },
    {
      "val": "jodha@123",
      "offset": 30
    }
  ],
  "location": "Login_page_sd.and(String,String)"
});
formatter.result({
  "duration": 19574451583,
  "status": "passed"
});
formatter.match({
  "location": "Login_page_sd.validate_logged_user()"
});
formatter.result({
  "duration": 553698094,
  "status": "passed"
});
});