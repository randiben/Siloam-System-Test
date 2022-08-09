package runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions (features = "src/test/resources/features",
					glue="comsiloam",
					plugin = {"pretty",
							"html:target/payment-reports",
							"json:target/payment-reports/payment.json"
							})

public class RunnerFiles extends AbstractTestNGCucumberTests {
	
	
}
