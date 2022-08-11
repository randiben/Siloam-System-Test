package comsiloam;

import org.testng.annotations.Listeners;

import com.aventstack.extentreports.testng.listener.ExtentITestListenerClassAdapter;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
@Listeners({ ExtentITestListenerClassAdapter.class })
@CucumberOptions(features = "src/test/resources/features", glue = "comsoliam", plugin = { "pretty",
		"html:target/cucumber-reports", "json:target/cucumber-reports/Cucumber2021.json" })
public class RunnerFile1 extends AbstractTestNGCucumberTests {

}

