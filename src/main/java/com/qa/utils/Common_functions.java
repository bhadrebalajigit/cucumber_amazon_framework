package com.qa.utils;

import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.gargoylesoftware.htmlunit.ElementNotFoundException;

public class Common_functions 

{
	public static final int time_unit=20;
	public static void setvalue(WebDriver driver,By obj,String parameter)
	{
		try
		{
			if(driver.findElement(obj).isDisplayed());
			{
				driver.findElement(obj).sendKeys(parameter);
			}

		}catch(NoSuchElementException e)
		{
			System.out.println(e);
		}

	}
	public static void clickmethod(WebDriver driver,By obj)
	{
			try
			{
				if(driver.findElement(obj).isDisplayed());
				{
					driver.findElement(obj).click();
				}
	
			}catch(NoSuchElementException e)
			{
				System.out.println(e);
			}
	
	}
	
	public static void alter_Handling(WebDriver driver)
	{
		 Alert alert = driver.switchTo().alert();
		 alert.accept();
	}
	
	public static String Alert_message(WebDriver driver)
	{
		String alert_message=driver.switchTo().alert().getText();
		return alert_message;
	}
	
	public static void alter_dismiss(WebDriver driver)
	{
		 Alert alert = driver.switchTo().alert();
		 alert.dismiss();
	}
	
	public static Boolean presenceOfElementLocated(WebDriver driver, By obj)
	{	
		Boolean flag=true;
		try
		{
			WebDriverWait wait = new WebDriverWait (driver, time_unit);
			wait.until(ExpectedConditions.visibilityOfElementLocated(obj));
			flag=true;
			return flag;
		} catch(TimeoutException e)
		{
			flag=false;
			return flag;
		}
		
	}
	
	public static Boolean elementToBeClickable(WebDriver driver, By obj)
	{	
		Boolean flag=true;
		try
		{
			WebDriverWait wait = new WebDriverWait (driver, time_unit);
			wait.until(ExpectedConditions.elementToBeClickable(obj));
			flag=true;
			return flag;
		} catch(TimeoutException e)
		{
			flag=false;
			return flag;
		}
		
	}
	
	 public static void Handle_windows(WebDriver driver)
	 {
		 String mainWindow=driver.getWindowHandle();
		 // It returns no. of windows opened by WebDriver and will return Set of Strings
		 Set<String> set =driver.getWindowHandles();
		 // Using Iterator to iterate with in windows
		 Iterator<String> itr= set.iterator();
		 while(itr.hasNext()){
		 String childWindow=itr.next();
		    // Compare whether the main windows is not equal to child window. If not equal, we will close.
		 if(!mainWindow.equals(childWindow)){
		 driver.switchTo().window(childWindow);
		 System.out.println(driver.switchTo().window(childWindow).getTitle());
		 driver.close();
		 }
		 }
		 // This is to switch to the main window
		 driver.switchTo().window(mainWindow);
		 }
	 public static void contain_text(WebDriver driver,String text)
		{
			driver.findElement(By.xpath("//*[contains(text(),'"+text+"')]"));
		}
	 
	 
	 }
	
	

