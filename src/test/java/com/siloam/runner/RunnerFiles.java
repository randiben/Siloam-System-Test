
package com.siloam.runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

<<<<<<< HEAD
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
=======
>>>>>>> 613057208fa734a42df5b140688e1a593001d698


@CucumberOptions(features = "src/test/resources/features/ViewExport.feature", glue = "comsiloam", plugin = { "pretty",
		"html:target/cucumber-reports", "json:target/cucumber-reports/Cucumber2021.json" })
public class RunnerFiles extends AbstractTestNGCucumberTests {
<<<<<<< HEAD
	test
	
}
=======

}
>>>>>>> 613057208fa734a42df5b140688e1a593001d698
