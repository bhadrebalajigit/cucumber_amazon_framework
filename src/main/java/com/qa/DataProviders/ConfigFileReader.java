package com.qa.DataProviders;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Properties;

import com.qa.Enums.DriverType;
import com.qa.Enums.EnvironmentType;

/**
 * @ Author Balaji Bhadre
 * @param object,filename
 * @throws ParseException 
 * @throws IOException 
 * @throws FileNotFoundException 
 */
public class ConfigFileReader 

	{
		private Properties properties;
		//private final String propertyFilePath= "Configuration.properties";
		
		public ConfigFileReader() throws IOException
		{
			FileInputStream fis= new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com" +
					"/qa/config/Configuration.properties");
			properties= new Properties();
			properties.load(fis);
			
		}
		public long getImplicitlyWait()
		{ 
			 String implicitlyWait = properties.getProperty("implicitlyWait");
			 if(implicitlyWait != null) {
			 try{
			 return Long.parseLong(implicitlyWait);
			 }catch(NumberFormatException e) {
			 throw new RuntimeException("Not able to parse value : " + implicitlyWait + " in to Long");
			 }
			 }
			 return 30; 
		}
		
		 public String getDriverPath()
		 {
			 String driverPath = properties.getProperty("driverPath");
			 if(driverPath!= null) return driverPath;
			 else throw new RuntimeException("Driver Path not specified in the Configuration.properties file for the Key:driverPath"); 
		 }
		
		 public String getApplicationUrl()
		 {
			 String url = properties.getProperty("url");
			 System.out.println("URL:"+url);
			 if(url != null) return url;
			 else throw new RuntimeException("Application Url not specified in the Configuration.properties file for the Key:url");
		 }
		 
		 public DriverType getBrowser() {
			 String browserName = properties.getProperty("browser");
			 if(browserName == null || browserName.equals("chrome")) return DriverType.CHROME;
			 else if(browserName.equalsIgnoreCase("firefox")) return DriverType.FIREFOX;
			 else if(browserName.equals("iexplorer")) return DriverType.INTERNETEXPLORER;
			 else throw new RuntimeException("Browser Name Key value in Configuration.properties is not matched : " + browserName);
			 }
			 
			 public EnvironmentType getEnvironment() {
			 String environmentName = properties.getProperty("environment");
			 if(environmentName == null || environmentName.equalsIgnoreCase("local")) return EnvironmentType.LOCAL;
			 else if(environmentName.equals("remote")) return EnvironmentType.REMOTE;
			 else throw new RuntimeException("Environment Type Key value in Configuration.properties is not matched : " + environmentName);
			 }
			 
			 public Boolean getBrowserWindowSize() {
			 String windowSize = properties.getProperty("windowMaximize");
			 System.out.println(properties.getProperty("windowMaximize"));
			 if(windowSize != null) return Boolean.valueOf(windowSize);
			 return true;
			 }
		
	}
