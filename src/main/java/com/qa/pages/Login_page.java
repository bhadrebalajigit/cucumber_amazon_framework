package com.qa.pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login_page 

{
	WebDriver driver;
	
	@FindBy(name="email")
	private WebElement Enter_username;
	
	@FindBy(name="password")
	private WebElement Enter_password;
	
	@FindBy(xpath="//div[@id='nav-tools']/a[@id='nav-link-yourAccount']/span[@class='nav-line-1']")
	private WebElement logged_user;
	
	
	public Login_page(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void user_credentials(String username,String password)
	{
		Enter_username.sendKeys(username,Keys.ENTER);
		Enter_password.sendKeys(password,Keys.ENTER);
	}
	
    public String validate_logged_user()
    {
    	String user_details=logged_user.getText();
    	return user_details;
    	
    }
	
}
