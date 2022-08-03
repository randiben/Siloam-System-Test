package com.siloam;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import org.openqa.selenium.WebDriver;

import com.siloam.plugin.DriverSet;


public class StepDefinitions {
	

	private static WebDriver driver;
	
	@Given("User mengakses url")
	public void user_mengakses_url() {
	   driver = DriverSet.setProperties();
	}

	@Then("User menampillkan halaman login")
	public void user_menampillkan_halaman_login() {
	    
	}
		
	

}
