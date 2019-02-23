@Login
Feature: To test login of amazon page using different data driven testing
 

  @Regression
  Scenario: User Logged in Amazon using Data Table
    Given User navigate to Amazon site
		When  Enter "username" And  	Enter "Password"
		Then 	Validate logged user