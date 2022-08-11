package com.siloam.runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

<<<<<<< HEAD:src/test/java/com/siloam/runner/RunnerFiles.java
@CucumberOptions (features = "src/test/resources/features",
					glue="com.siloam.stepdef",
=======
@CucumberOptions (features = "src/test/resources/features/TTD.feature",
					glue="com.siloam.ttd",
>>>>>>> ben:src/test/java/com/siloam/RunnerFiles.java
					plugin = {"pretty",
							"html:target/payment-reports",
							"json:target/payment-reports/payment.json"
							})

public class RunnerFiles extends AbstractTestNGCucumberTests {
	test
	
}
