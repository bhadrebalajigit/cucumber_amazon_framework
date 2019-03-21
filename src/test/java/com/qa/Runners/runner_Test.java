package com.qa.Runners;


import java.io.File;
import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.Description;
import org.junit.runner.RunWith;
import org.junit.runner.Runner;
import org.junit.runner.notification.RunNotifier;

import com.cucumber.listener.Reporter;
import com.qa.Managers.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:/cucumber_amazon_framework/com.qa.amazon/src/test/java/com/qa/Features"
		,glue={"com/qa/StepDefinitions"},
		dryRun=false,
		monochrome=true,
		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/Amazon_Report.html"},
				//plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
		tags={"@CurrentTest"}
		
		)

//mvn test -Dcucumber.options="src/test/java --tags @CurrentTest"

//https://stackoverflow.com/questions/39471048/run-javacucumberjunit-maven-project-in-command-line/40974069

public class runner_Test 

	{
	
	@AfterClass
	 public static void writeExtentReport() throws IOException {
		 Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
		 Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
	     Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	     Reporter.setSystemInfo("Machine", "Windows 7 " + "64 Bit");
	     Reporter.setSystemInfo("Selenium", "3.7.0");
	     Reporter.setSystemInfo("Maven", "3.5.2");
	     Reporter.setSystemInfo("Java Version", "1.8.0_151");
		 
		 }

	}



