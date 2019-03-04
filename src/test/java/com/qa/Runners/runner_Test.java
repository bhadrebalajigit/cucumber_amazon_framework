package com.qa.Runners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:/cucumber_amazon_framework/com.qa.amazon/src/test/java/com/qa/Features"
		,glue={"com/qa/StepDefinitions"},
		dryRun=false,
		monochrome=true,
		plugin = {"html:target/site/cucumber-pretty","json:target/cucumber.json"},
		//tags={"@LoginTest,@SmokeTest"}
		tags={"@CurrentTest"}
		)
public class runner_Test {

}

