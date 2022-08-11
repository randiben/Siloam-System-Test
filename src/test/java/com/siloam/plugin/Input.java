package com.siloam.plugin;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

//import com.siloam.plugin.DriverSet;


public class Input {
	
	private WebDriver driver;
	
	
	public static void inputData() {
		
		try {
			DriverSet.getDriver().findElement(By.xpath("//a[@href='https://dev.ptdika.com/siloam/sales/input']")).click();
			DriverSet.getDriver().findElement(By.xpath("//input[@id='name']")).sendKeys("eben kesbor");
			//no bpjs 13 digit
			DriverSet.getDriver().findElement(By.xpath("//input[@id='no_bpjs']")).sendKeys("9485733335746");
			//no ktp 16 digit
			DriverSet.getDriver().findElement(By.xpath("//input[@id='no_ktp']")).sendKeys("1234567890123456");
			DriverSet.getDriver().findElement(By.xpath("//textarea[@id='address']")).sendKeys("Bojong Soang");
			
			DriverSet.getDriver().findElement(By.xpath("//span[@id='select2-ktp_city-container']")).click();
//			WebDriverWait wait = new WebDriverWait(DriverSet.getDriver(), 5);
			WebElement kotaKTP = DriverSet.getDriver().findElement(By.xpath("//input[@class='select2-search__field']"));
//				wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@class='select2-search__field']")));
			kotaKTP.sendKeys("KABUPATEN PIDIE");
			kotaKTP.sendKeys(Keys.ENTER);
			DriverSet.getDriver().findElement(By.xpath("//input[@id='origin_faskes']")).sendKeys("bojong soang city");
			DriverSet.getDriver().findElement(By.xpath("//span[@id='select2-destination_faskes-container']")).click();
			WebElement faskesTujuan = DriverSet.getDriver().findElement(By.xpath("//input[@class='select2-search__field']"));
			faskesTujuan.sendKeys("clinic sunter");
			faskesTujuan.sendKeys(Keys.ENTER);
//			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//			DriverSet.getDriver().findElement(By.xpath("//textarea[@id='reason']")).sendKeys("bosan");
//			
//			//			WebElement reason = new WebDriverWait(DriverSet.getDriver(), Duration.ofSeconds(10))
//				.until(ExpectedConditions.elementToBeClickable(By.xpath("//textarea[@id='reason']"));
//			DriverSet.getDriver().findElement(By.xpath("//button[@type='submit']")).click();
			} catch (WebDriverException e) {}
		
		try {
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			DriverSet.getDriver().findElement(By.xpath("//textarea[@id='reason']")).sendKeys("bosan");
			DriverSet.getDriver().findElement(By.xpath("//button[@type='submit']")).click();
		} catch (WebDriverException e) {}
	}

}
