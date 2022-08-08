package com.siloam.stepdef;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import org.openqa.selenium.WebDriver;

import com.siloam.plugin.DriverSet;
import com.siloam.plugin.LoginStep;


public class StepDefinitions {
	

	private static WebDriver driver;
	private LoginStep loginPage;
	
	
	
	@Given("User mengakses url")
	public void user_mengakses_url() {
		DriverSet.setDriver();
		driver.navigate().to(DriverSet.url);
		driver.manage().window().maximize();
		loginPage.loginSales();
	}

	@Then("User menampillkan halaman login")
	public void user_menampillkan_halaman_login() {
	    
	}
		
	

}
