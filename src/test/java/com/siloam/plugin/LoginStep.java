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
	
	public static void loginSales() {
		DriverSet.setDriver();
		DriverSet.getDriver().navigate().to(DriverSet.url);
		DriverSet.getDriver().findElement(By.xpath("//input[@name=\"username\"]")).sendKeys("D6200927");
		DriverSet.getDriver().findElement(By.xpath("//input[@name=\"password\"]")).sendKeys("19971023");
		DriverSet.getDriver().findElement(By.xpath("//button[@type=\"submit\"]")).click();
		
	}
	
	public static void loginAdmin() {
		DriverSet.setDriver();
		DriverSet.getDriver().navigate().to(DriverSet.url);
		DriverSet.getDriver().findElement(By.xpath("//input[@name=\"username\"]")).sendKeys("admindika");
		DriverSet.getDriver().findElement(By.xpath("//input[@name=\"password\"]")).sendKeys("d1k4@passw0rd");
		DriverSet.getDriver().findElement(By.xpath("//button[@type=\"submit\"]")).click();
		
	}
}
