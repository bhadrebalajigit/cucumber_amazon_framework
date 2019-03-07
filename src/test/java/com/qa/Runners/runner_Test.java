package com.qa.Runners;


import org.junit.BeforeClass;
import org.junit.runner.Description;
import org.junit.runner.RunWith;
import org.junit.runner.Runner;
import org.junit.runner.notification.RunNotifier;

import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:/cucumber_amazon_framework/com.qa.amazon/src/test/java/com/qa/Features"
		,glue={"com/qa/StepDefinitions"},
		dryRun=false,
		monochrome=true,
		plugin = {"html:target/site/cucumber-pretty","json:target/cucumber.json"},
				//plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
		tags={"@CurrentTest"}
		
		)
//mvn test -Dcucumber.options="src/test/java --tags @CurrentTest"

public class runner_Test 

	{
	
	


	
	
	 
	}



