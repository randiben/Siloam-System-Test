package comsiloam;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TestView {
	WebDriver driver = null;
	String baseURL = "https://dev.ptdika.com/siloam/";

	@Given("user berada di halaman login")
	public void user_berada_di_halaman_login() {
		System.setProperty("webdriver.chrome.driver", "C:\\webdrivers\\chromedriver.exe");
		this.driver = new ChromeDriver();
		driver.navigate().to(this.baseURL);
	}

	@When("user input valid username dan password")
	public void user_input_valid_username_dan_password() {
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("admindika");
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("d1k4@passw0rd");
	}

	@When("click login")
	public void click_login() {
		driver.findElement(By.xpath("//button[normalize-space()='Login']")).submit();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Then("user berada di dashboard admin")
	public void user_berada_di_dashboard_admin() {
		String Expect = "DIKA | SILOAM | Home";
		String ActualTitle = driver.getTitle();
		assertEquals(ActualTitle, Expect);
		driver.close();
	}

}
