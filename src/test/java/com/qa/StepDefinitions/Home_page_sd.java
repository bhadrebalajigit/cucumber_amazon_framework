package com.qa.StepDefinitions;

import org.openqa.selenium.WebDriver;


import com.cucumber.listener.Reporter;
import com.qa.Managers.PageObjectManager;
import com.qa.Managers.WebDriverManager;
import com.qa.TestBase.TestContext;
import com.qa.pages.Home_page;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Home_page_sd {


	TestContext testContext;
	public Home_page homePage;

	
	public Home_page_sd(TestContext context)
	{
		testContext=context;
		homePage=testContext.getPageObjectManager().getHomePage();
		
	}
	@Given("^User navigate to Amazon site$")
	public void user_navigate_to_Amazon_site() throws Throwable 
	{

		 homePage.navigateTo_HomePage();
		 Reporter.addStepLog("Navigating to Amazon site");
		 
	   
	}

	@Then("^Validate title of of amazone page$")
	public void validate_title_of_of_amazone_page() throws Throwable 
	
	{
	    System.out.println("Title of HomePage"+homePage.title_homepage());
	  
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
	

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable
	{
	   homePage.close_browser();
	}
}
