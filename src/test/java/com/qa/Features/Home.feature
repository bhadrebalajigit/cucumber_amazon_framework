@Home
Feature: To Test Home page of Amazon website
 

  @Regression
  Scenario: To Validate title of page
    Given User navigate to Amazon site
		Then  Validate title of of amazone page 

@Homepage @Regression
  Scenario: Validate Hello Sign in menu
    Given User navigate to Amazon site
		Then  Validate Hello Sign in menu
		
@Homepage @Regression 
  Scenario: Validate Hello Sign in menu
    Given User navigate to Amazon site
		Then  Validate all the Footer Menu
		
		@Homepage @Regression @EndtoEnd
  Scenario: Validate Hello Sign in menu
    Given User navigate to Amazon site
		Then  User clicked on Hello Sign in button
		

