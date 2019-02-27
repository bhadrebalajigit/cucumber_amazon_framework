package com.qa.StepDefinitions;


import java.util.List;
import java.util.Map;

import com.qa.TestBase.TestContext;
import com.qa.pages.Home_page;
import com.qa.pages.Login_page;
import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class Login_page_sd 
{
	
	TestContext testContext;
	public Home_page homePage;
	public Login_page loginPage;
    
	public Login_page_sd(TestContext context)
	{
		testContext=context;
		//homePage=testContext.getPageObjectManager().getHomePage();
		loginPage=testContext.getPageObjectManager().getloginpage();
		
	}
	

	@When("^Enter \"([^\"]*)\" And  	Enter \"([^\"]*)\"$")
	public void enter_And_Enter(String arg1, String arg2) 
	{
		loginPage.user_credentials("bhadrebalaji@gmail.com", "jodha@123");
	}
	
	@Then("^User Enter username and enter Password$")
	public void user_Enter_username_and_enter_Password(DataTable usercredentials)
	{
		List<List<String>> data=usercredentials.raw();
		loginPage.user_credentials(data.get(0).get(0),data.get(0).get(1));
	}

	@Then("^\"([^\"]*)\" and \"([^\"]*)\"$")
	public void and(String arg1, String arg2) throws Throwable 
	{
	   loginPage.user_credentials(arg1, arg2);
	}

	

	@Then("^Validate logged user$")
	public void validate_logged_user() 
	{
		System.out.println(" Logged user name:"+loginPage.validate_logged_user());
	  
	}
  

}
