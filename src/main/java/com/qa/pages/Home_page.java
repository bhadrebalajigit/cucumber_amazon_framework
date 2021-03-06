package com.qa.pages;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.xml.xpath.XPath;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

import com.qa.Managers.FileReaderManager;

public class Home_page {
	
	
	WebDriver driver;
	
	String [] footers_menu={"Get to Know Us","Connect with Us","Make Money with Us","Let Us Help You"};
	
	@FindBy(xpath="//span[@class='nav-line-1' and contains(text(),'Hello, Sign in')]")
	private WebElement Hello_sign_in;
	

	private WebElement Footers;
	
	 
	public Home_page(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	
	 public void navigateTo_HomePage() throws IOException 
	 {
		 driver.get(FileReaderManager.getInstance().getConfigReader().getApplicationUrl());
	 }
	 
	 public boolean Hello_sign_in_menu()
	 {
		 return Hello_sign_in.isDisplayed();
	 }
	
    public void footer_menu()
    {
    	for(String str:footers_menu)
    	{
    		List<WebElement> footer_text=driver.findElements(By.xpath("//div[@class='navFooterColHead' and contains(text(),'"+str+"')]/parent::div/ul/li"));
    		System.out.println("***********"+str+"***********");
    		Iterator<WebElement> footer_list = footer_text.iterator();
    		while(footer_list.hasNext()) 
    		{
    		    WebElement row = footer_list.next();
    		    System.out.println("          "+row.getText());
    		    
    		}  		 
    	
    	}
    }
    
    public Login_page Hello_signin_button()
    {
    	Hello_sign_in.click();
    	
    	return new Login_page(driver);
    	
    }
}
