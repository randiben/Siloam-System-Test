package com.siloam.uploaddoc;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.siloam.plugin.DriverSet;
import com.siloam.plugin.Input;
import com.siloam.plugin.LoginStep;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class UploadDocumentStepDef {
//	private static WebDriver driver;
	String actualResult = null;
	
	@Given("User sales akses url")
	public void user_sales_akses_url() {
//		System.setProperty("webdriver.chrome.driver", "C:\\webdriver\\chromedriver.exe");
//		this.driver = new ChromeDriver();
//		this.driver.navigate().to(this.url);
//		DriverSet.setDriver();
//		driver.navigate().to(DriverSet.url);
		LoginStep.loginSales();
	}
	
	@When("User sales akses menu upload")
	public void user_sales_akses_menu_upload() {
		Input.inputData();
	}

	@Then("Menampilkan halaman upload document {string}")
	public void menampilkan_halaman_upload_document(String alert) {
	    actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@role='alert']")).getText();
	    assertEquals(actualResult.toLowerCase(), alert.toLowerCase());
	}

	@When("User tambah foto")
	public void user_tambah_foto() {
		DriverSet.getDriver().findElement(By.xpath("//span[normalize-space()='Foto Faskes Awal']")).click();
//		WebDriverWait wait = new WebDriverWait(DriverSet.getDriver(), 5);
//		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='file']"))).click();
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\genesis.png");
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@When("klik tombol cancel")
	public void klik_tombol_cancel() {
		DriverSet.getDriver().findElement(By.xpath("//button[@class='btn btn-danger pull-left']")).click(); 
		DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Then("halaman kembali ke menu upload tanpa foto terupload {string}")
	public void halaman_kembali_ke_menu_upload_tanpa_foto_terupload(String imgName) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//tbody[1]/tr[1]/td[1]/div[1]/img[1]")).getAttribute("src");
		assertEquals(actualResult.toLowerCase(), imgName.toLowerCase());
		DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		System.out.println(actualResult);
	}

	@When("User tambah foto faskes awal size besar")
	public void user_tambah_foto_faskes_awal_size_besar() {
		DriverSet.getDriver().findElement(By.xpath("//span[normalize-space()='Foto Faskes Awal']")).click();
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\IMG_8424.JPG");
			DriverSet.getDriver().findElement(By.xpath("//button[@id='btnSave']")).click();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}

	@Then("Upload size error {string}")
	public void upload_size_error(String notif) {
		try {
		Thread.sleep(8000);
		actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@id='message']")).getText();
		assertEquals(actualResult.toLowerCase(), notif.toLowerCase());
		DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}
	
	@When("User tambah foto faskes awal format bukan image")
	public void user_tambah_foto_faskes_awal_format_bukan_image() {
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\test.pdf");
			DriverSet.getDriver().findElement(By.xpath("//button[@id='btnSave']")).click();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}

	@Then("Upload format error {string}")
	public void upload_format_error (String notif) {
		try {
			Thread.sleep(8000);
		actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@id='message']")).getText();
		assertEquals(actualResult.toLowerCase(), notif.toLowerCase());
		DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}	catch (InterruptedException e) { }
	}
	
	@When("User tambah foto faskes awal dengan benar")
	public void user_tambah_foto_faskes_awal_dengan_benar() {
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\fri.PNG");
			DriverSet.getDriver().findElement(By.xpath("//button[@id='btnSave']")).click();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}
	
	@Then("Muncul pop up berhasil diupload {string}")
	public void muncul_pop_up_data_berhasil_diupload(String notif) {
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@class='swal-text']")).getText();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			assertEquals(actualResult.toLowerCase(), notif.toLowerCase());	
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			DriverSet.getDriver().findElement(By.xpath("//button[normalize-space()='OK']")).click();
	}
	
	//Button Foto Faskes Tujuan
	
	@When("User cancel tambah foto faskes tujuan")
	public void user_cancel_tambah_foto_faskes_tujuan() {
		DriverSet.getDriver().findElement(By.xpath("//span[normalize-space()='Foto Faskes Tujuan']")).click();
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\genesis.png");
			DriverSet.getDriver().findElement(By.xpath("//button[@class='btn btn-danger pull-left']")).click();
		} catch (InterruptedException e) {} 
	}
	
	@Then("foto faskes tujuan tidak diupload {string}")
	public void foto_faskes_tujuan_tidak_diupload (String imgName) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//*[@id=\"default-tab-2\"]/div[1]/div/table/tbody[2]/tr[1]/td[1]/div/img")).getAttribute("src");		
		assertEquals(actualResult.toLowerCase(), imgName.toLowerCase());
		System.out.println(actualResult);
		
	}
	
	@When("User tambah foto faskes tujuan size besar")
	public void user_tambah_foto_faskes_tujuan_size_besar() {
		DriverSet.getDriver().findElement(By.xpath("//span[normalize-space()='Foto Faskes Tujuan']")).click();
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\IMG_8424.JPG");
			DriverSet.getDriver().findElement(By.xpath("//button[@id='btnSave']")).click();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}

	@Then("Upload foto faskes tujuan size error {string}")
	public void upload_foto_faskes_tujuan_size_error(String notif) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@id='message']")).getText();
		assertEquals(actualResult.toLowerCase(), notif.toLowerCase());
	}
	
	@When("User tambah foto faskes tujuan bukan image")
	public void user_tambah_foto_faskes_tujuan_bukan_image() {
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\test.pdf");
			DriverSet.getDriver().findElement(By.xpath("//button[@id='btnSave']")).click();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}

	@Then("Upload foto faskes tujuan format error {string}")
	public void upload_foto_faskes_tujuan_format_error (String notif) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@id='message']")).getText();
		assertEquals(actualResult.toLowerCase(), notif.toLowerCase());
	}

	@When("User tambah foto faskes tujuan")
	public void user_tambah_foto_faskes_tujuan() {
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\logosi.PNG");
			DriverSet.getDriver().findElement(By.xpath("//button[@id='btnSave']")).click();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}
	
	@Then("Muncul pop up foto tujuan berhasil {string}")
	public void muncul_pop_up_foto_tujuan_berhasil(String notif) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@class='swal-text']")).getText();
		assertEquals(actualResult.toLowerCase(), notif.toLowerCase());
		DriverSet.getDriver().findElement(By.xpath("//button[normalize-space()='OK']")).click();		
	}
	
	
	//Button Foto Tanda Tangan

	@When("User cancel tambah foto ttd")
	public void user_cancel_tambah_foto_ttd() {
		DriverSet.getDriver().findElement(By.xpath("//span[normalize-space()='Tanda Tangan Digital']")).click();
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\genesis.png");
			DriverSet.getDriver().findElement(By.xpath("//button[@class='btn btn-danger pull-left']")).click();
		} catch (InterruptedException e) {} 
	}
	
	@Then("foto ttd tidak diupload {string}")
	public void foto_ttd_tidak_diupload (String imgName) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//*[@id=\"default-tab-2\"]/div[1]/div/table/tbody[3]/tr[1]/td[1]/div/img")).getAttribute("src");
		assertEquals(actualResult.toLowerCase(), imgName.toLowerCase());
		System.out.println(actualResult);
	}
	
	@When("User tambah foto ttd size besar")
	public void user_tambah_foto_ttd_size_besar() {
		DriverSet.getDriver().findElement(By.xpath("//span[normalize-space()='Tanda Tangan Digital']")).click();
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\IMG_8424.JPG");
			DriverSet.getDriver().findElement(By.xpath("//button[@id='btnSave']")).click();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}

	@Then("Upload foto ttd size error {string}")
	public void upload_foto_ttd_size_error(String notif) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@id='message']")).getText();
		assertEquals(actualResult.toLowerCase(), notif.toLowerCase());
	}

	@When("User tambah foto ttd bukan image")
	public void user_tambah_foto_ttd_bukan_image() {
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\test.pdf");
			DriverSet.getDriver().findElement(By.xpath("//button[@id='btnSave']")).click();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}

	@Then("Upload foto ttd format error {string}")
	public void upload_foto_ttd_format_error (String notif) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@id='message']")).getText();
		assertEquals(actualResult.toLowerCase(), notif.toLowerCase());
	}
	
	@When("User tambah foto ttd")
	public void user_tambah_foto_ttd() {
		try {
			Thread.sleep(4000);
			WebElement chooseFile = DriverSet.getDriver().findElement(By.xpath("//input[@id='file']"));
			chooseFile.sendKeys("C:\\Users\\Ben\\Pictures\\siloamJPG\\telkom.PNG");
			DriverSet.getDriver().findElement(By.xpath("//button[@id='btnSave']")).click();
			DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (InterruptedException e) { }
	}
	
	@Then("Muncul pop up foto ttd berhasil {string}")
	public void muncul_pop_up_foto_ttd_berhasil(String notif) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//div[@class='swal-text']")).getText();
		assertEquals(actualResult.toLowerCase(), notif.toLowerCase());
		DriverSet.getDriver().findElement(By.xpath("//button[normalize-space()='OK']")).click();		
	}
		
	@When("User upload tiga foto yang diminta sistem")
	public void user_upload_tiga_foto_yang_diminta_sistem() {
		DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Then("Tampil notifikasi dokumen lengkap {string}")
	public void tampil_notifikasi_dokumen_lengkap(String alert) {
		actualResult = DriverSet.getDriver().findElement(By.xpath
				("//div[@class='alert alert-success alert-dismissable hilang_notif']")).getText();
		assertEquals(actualResult.toLowerCase(), alert.toLowerCase());
	}

	@When("User klik button selanjutnya")
	public void user_klik_button_selanjutnya() {
		DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		DriverSet.getDriver().findElement(By.xpath("//a[@class='btn btn-primary']")).click();
		DriverSet.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		DriverSet.getDriver().switchTo().alert().accept();
	}

	@Then("Menampilkan halaman menu ttd {string}")
	public void menampilkan_halaman_menu_ttd_dengan_review_data(String active) {
		actualResult = DriverSet.getDriver().findElement(By.xpath("//a[@class='nav-link active']"))
				.getAttribute("class");
		assertEquals(actualResult.toLowerCase(), active.toLowerCase());
	}
}
