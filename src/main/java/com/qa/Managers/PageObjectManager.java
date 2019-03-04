package com.qa.Managers;

import org.openqa.selenium.WebDriver;

import com.qa.pages.Home_page;
import com.qa.pages.Login_page;

public class PageObjectManager {

	private WebDriver driver;
	private Home_page homePage;
	private Login_page loginpage;
	
	public PageObjectManager(WebDriver driver) {
		 
		 this.driver = driver;
		 
		 }
	
	public Home_page getHomePage() 
	{

		return (homePage == null) ? homePage = new Home_page(driver) : homePage;

	}

	public Login_page getloginpage() 
	{
		return (loginpage == null) ? loginpage = new Login_page(driver)
				: loginpage;
	}
  
}
