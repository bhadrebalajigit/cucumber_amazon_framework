@Home
Feature: To Test Home page of Amazon website
 

  @Regression
  Scenario: To Validate title of page
    Given User navigate to Amazon site
		Then  Validate title of of amazone page 
		Then close the browser

@Homepage 
  Scenario: Validate Hello Sign in menu
    Given User navigate to Amazon site
		Then  Validate Hello Sign in menu
		Then close the browser
		
@Homepage  
  Scenario: Validate Hello Sign in menu
    Given User navigate to Amazon site
		Then  Validate all the Footer Menu
		Then close the browser
		
		@Homepage @Regression @EndtoEnd
  Scenario: Validate Hello Sign in menu
    Given User navigate to Amazon site
		Then  User clicked on Hello Sign in button
		Then close the browser
		

