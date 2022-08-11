package com.siloam.plugin;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Contoh {
	
	private static WebDriver driver;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		DriverSet.setDriver();
		DriverSet.getDriver().navigate().to(DriverSet.url);
		DriverSet.getDriver().findElement(By.xpath("//input[@name=\"username\"]")).sendKeys("D6200927");
//		DriverSet.getDriver().findElement(By.xpath("//input[@name=\"password\"]")).sendKeys("19971023");
//		DriverSet.getDriver().findElement(By.xpath("//button[@type=\"submit\"]")).click();
	}

}
