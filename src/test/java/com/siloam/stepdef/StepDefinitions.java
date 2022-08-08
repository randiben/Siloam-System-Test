package com.siloam.stepdef;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import com.relevantcodes.extentreports.LogStatus;
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

	@Given("User berada di dalam halaman login")
	public void user_berada_di_dalam_halaman_login() {

		String home = driver.getTitle();
		System.out.println(home);
		assertEquals(home, "Login Form | Dika");
//		test.log(LogStatus.PASS, "User berada di halaman logIn");
		
	}

	@When("User memasukan username {string}")
	public void user_memasukan_Username(String string) {
	    driver.findElement(By.xpath("//input[@placeholder='Username']"))
	    					.sendKeys(string);
//	    test.log(LogStatus.PASS, "User memasukan Username");
	}
	
	@When("User menekan tombol Login")
	public void user_menekan_tombol_Login() {
		driver.findElement(By.xpath("//div[@class='login-buttons']")).click();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
//		test.log(LogStatus.PASS, "User menekan tombol Login");
	}

	@Then("User mendapatkan kata informasi pada bagian username")
	public void user_mendapatkan_kata_informasi_pada_bagian_username() {
		String pesanUsername = driver.findElement
								(By.xpath("//input[@placeholder='Username']"))
								.getAttribute("validationMessage");
		System.out.println(pesanUsername);
		Assert.assertEquals(pesanUsername, "Please fill out this field.");
//		test.log(LogStatus.PASS, "User mendapatkan kata pemberitahuan");
	}

	@Then("User mendapatkan kata informasi pada bagian password")
	public void user_mendapatkan_kata_informasi_pada_bagian_password() {
		String pesanPassword = driver.findElement
								(By.xpath("//input[@placeholder='Password']"))
								.getAttribute("validationMessage");
		System.out.println(pesanPassword);
		Assert.assertEquals(pesanPassword, "Please fill out this field.");
//		test.log(LogStatus.PASS, "User mendapatkan kata pemberitahuan");
	}

	@Then("User mendapatkan kata informasi gagal login")
	public void user_mendapatkan_kata_informasi_gagal_login() {
		String pesanGagal = (String)driver.findElement
							(By.xpath("//div[@class='alert alert-danger alert-dismissable']")).getText();
		System.out.println(pesanGagal);
//		test.log(LogStatus.PASS, "User mendapatkan kata pemberitahuan gagal logIn");
		}

	@When("User memasukan password {string}")
	public void user_memasukan_password(String string) {
		driver.findElement(By.xpath("//input[@placeholder='Password']"))
							.sendKeys(string);
//		test.log(LogStatus.PASS, "User memasukan password");
	}
	
	@Then("User berhasil login dan berada dalam halaman home")
	public void user_berhasil_login_dan_berada_dalam_halaman_home() {
		String text = driver.getTitle();
		System.out.println(text);
		assertEquals(text, "DIKA | SILOAM | Home");
//		test.log(LogStatus.PASS, "User berada dalam halaman home");
	}
		
	

}
