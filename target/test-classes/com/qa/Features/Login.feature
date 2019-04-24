@Login
Feature: To test login of amazon page using different data driven testing
 

  @LoginwithoutDataTable
  Scenario: User Logged in Amazon using without Data Table
    Given User navigate to Amazon site
    Then  User clicked on Hello Sign in button
		When  Enter "username" And  Enter "Password"
		Then 	Validate logged user
		
 @Current
  Scenario: User Logged in Amazon using Data Table with Data Value in Step it self
    Given User navigate to Amazon site
    Then  User clicked on Hello Sign in button
    And User Enter username and enter Password
    | bhadrebalaji@gmail.com | jodha@123 |
    Then 	Validate logged user
    
  @Loginwithscenariooutline
  Scenario Outline: Successful Login with Valid Credentials
    Given User navigate to Amazon site
    When User clicked on Hello Sign in button
    Then "<UserName>" and "<Password>"
    And Validate logged user
    Examples: 
      | UserName                 | Password  |
      | bhadrebalaji@gmail.com   | jodha@123 | 
      | tupekarsupriya@gmail.com | jodha@123 |
      | bhadrebalaji@gmail.com   | jodha@123 | 

  
    
    
    
    