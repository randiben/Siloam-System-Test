package com.siloam.plugin;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.siloam.plugin.DriverSet;

public class LoginStep {
	
	private static WebDriver driver;
	
	
//	@FindBy (xpath = "//input[@name=\"username\"]")
//	private WebElement formUsername;
//	
//	@FindBy (xpath = "//input[@name=\"password\"]")
//	private WebElement formPassword;
//	
//	@FindBy (xpath = "//button[@type=\"submit\"]")
//	private WebElement btnLogin;
	
	public void loginSales() {
//		driver = DriverSet.setProperties();
		driver.findElement(By.xpath("//input[@name=\"username\"]")).sendKeys("D6200927");
		driver.findElement(By.xpath("//input[@name=\"password\"]")).sendKeys("19971023");
		driver.findElement(By.xpath("//button[@type=\"submit\"]")).click();
		
	}
}
