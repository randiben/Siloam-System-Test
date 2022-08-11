
package com.siloam.runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;



@CucumberOptions(features = "src/test/resources/features/ViewExport.feature", glue = "comsiloam", plugin = { "pretty",
		"html:target/cucumber-reports", "json:target/cucumber-reports/Cucumber2021.json" })
public class RunnerFiles extends AbstractTestNGCucumberTests {

}