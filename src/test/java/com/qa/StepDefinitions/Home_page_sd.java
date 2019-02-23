package com.qa.StepDefinitions;

import org.openqa.selenium.WebDriver;


import com.qa.Managers.PageObjectManager;
import com.qa.Managers.WebDriverManager;
import com.qa.pages.Home_page;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Home_page_sd {

	WebDriver driver;
	WebDriverManager webDriverManager;
	public Home_page homePage;
	public PageObjectManager pageObjectManager;
	
	
	@Given("^User navigate to Amazon site$")
	public void user_navigate_to_Amazon_site() throws Throwable {
		webDriverManager = new WebDriverManager();
		 driver = webDriverManager.getDriver();
		 pageObjectManager = new PageObjectManager(driver);
		 homePage = pageObjectManager.getHomePage();
		 homePage.navigateTo_HomePage();
		 
	   
	}

	@Then("^Validate title of of amazone page$")
	public void validate_title_of_of_amazone_page() throws Throwable 
	
	{
	    String title=driver.getTitle();
		System.out.println("Title of page:"+title);
	  
	}
	
	
	@Then("^Validate Hello Sign in menu$")
	public void validate_Hello_Sign_in_menu() 
	{
		homePage.Hello_sign_in_menu();
	
	}
	
	@Then("^Validate all the Footer Menu$")
	public void validate_all_the_Footer_Menu() 
	{
		 homePage.footer_menu();
	 
	}
	
	@Then("^User clicked on Hello Sign in button$")
	public void user_clicked_on_Hello_Sign_in_button() 
	{
	   homePage.Hello_signin_button();
	}

	@After
	public void teardown()
	{
		//driver.close();
	}
}
