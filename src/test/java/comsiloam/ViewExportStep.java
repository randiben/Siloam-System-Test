package comsiloam;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindAll;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ViewExportStep {
	WebDriver driver = null;
	String baseURL = "https://dev.ptdika.com/siloam/";

	@Given("user berada di halaman login")
	public void user_berada_di_halaman_login() {
		System.setProperty("webdriver.chrome.driver", "/home/ancient/Downloads/chromedriver_linux64/chromedriver");
		this.driver = new ChromeDriver();
		driver.navigate().to(this.baseURL);
	}

	@When("user input valid username dan password")
	public void user_input_valid_username_dan_password() {
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("admindika");
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("d1k4@passw0rd");

	}

	@And("click login")
	public void click_login() {
		driver.findElement(By.xpath("//button[normalize-space()='Login']")).submit();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

//
	@Then("user berada di dashboard admin")
	public void user_berada_di_dashboard_admin() {
		String Expect = "DIKA | SILOAM | Home";
		String ActualTitle = driver.getTitle();
		assertEquals(ActualTitle, Expect);
		driver.close();
	}

	@When("user klik menu View & Export")
	public void user_klik_menu_View_Export() {
		WebElement menu_view_export = driver
				.findElement(By.xpath("//a[@href='https://dev.ptdika.com/siloam/bd/export_data']"));
		menu_view_export.click();

	}

//
	@Then("user berada di halaman View & Export")
	public void user_berada_di_halaman_View_Export() {
		WebElement info = driver.findElement(By.xpath("//h1[normalize-space()='View & Export']"));
		assertEquals(info.getText(), "View & Export");

		driver.close();
	}

	@When("user klik button export")
	public void user_klik_button_export() {
		WebElement btn_export = driver.findElement(By.xpath("//button[normalize-space()='Export']"));
		btn_export.click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

	@Then("user mendapatkan notif error export")
	public void user_mendapatkan_notif_error_export() {
		WebElement export_info = driver.findElement(By.xpath("//div[@role='alert']"));
		assertEquals(export_info.getText(), "Danger! Mohon isi start_date dan end_date terlebih dahulu!!!\n" + "×");
		driver.close();
	}

	@When("user klik button download")
	public void user_klik_button_download() {
		WebElement btn_download = driver.findElement(By.xpath("//button[normalize-space()='Download']"));
		btn_download.click();
	}

	@Then("user mendapatkan notif error download")
	public void user_mendapatkan_notif_error_download() {
		WebElement download_info = driver.findElement(By.xpath("//div[@role='alert']"));
		assertEquals(download_info.getText(), "Danger! Mohon isi start_date dan end_date terlebih dahulu!!!\n" + "×");
		driver.close();
	}

	@When("user isi start date dan end date")
	public void user_isi_start_date_dan_end_date() {
		WebElement start_date = driver.findElement(By.id("datepicker"));
		start_date.sendKeys("2022-08-01");
		WebElement end_date = driver.findElement(By.id("datepicker2"));
		end_date.sendKeys("2022-08-04");

	}

	@When("klik filter")
	public void klik_filter() {
		WebElement btn_fillter = driver.findElement(By.xpath("//button[normalize-space()='Filter']"));
		btn_fillter.click();
	}

	@Then("user melihat data ditemukan")
	public void user_melihat_data_ditemukan() {
		WebElement Data = driver.findElement(By.xpath("//tbody/tr[1]/td[2]/a[1]"));
		assertEquals(Data.getText(), "View");
		driver.close();

	}

	@When("user isi start date dan end date invalid")
	public void user_isi_start_date_dan_end_date_invalid() {
		WebElement start_date = driver.findElement(By.id("datepicker"));
		start_date.sendKeys("2022-08-20");
		WebElement end_date = driver.findElement(By.id("datepicker2"));
		end_date.sendKeys("2022-08-30");
	}

//	tidak ada indikator bahwa data tidak ditemukan..jadi menggunakan View&expoort karna outputnya sama
	@Then("user melihat data tidak ditemukan")
	public void user_melihat_data_tidak_ditemukan() {
		WebElement info = driver.findElement(By.xpath("//h1[normalize-space()='View & Export']"));
		assertEquals(info.getText(), "View & Export");
		driver.close();
	}

	@When("klik View pada Data")
	public void klik_View_pada_Data() {
		WebElement Data = driver.findElement(By.xpath("//tbody/tr[1]/td[2]/a[1]"));
		Data.click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

//	saat pindah tab maka elementnya tidak terbaca
	@Then("user melihat detail data")
	public void user_melihat_detail_data() {

		WebElement Detail_data = driver.findElement(By.xpath("//li[@class='breadcrumb-item active']"));
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		assertEquals(Detail_data.getText(), "View & Export Data");
		driver.close();
	}

	@When("klik export")
	public void klik_export() {
		WebElement btn_export = driver.findElement(By.xpath("//button[normalize-space()='Export']"));
		btn_export.click();
	}

	@Then("data berhasil di export")
	public void data_berhasil_di_export() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("user mendapat notif")
	public void user_mendapat_notif() {
		WebElement info = driver.findElement(By.xpath("//div[@role='alert']"));
		assertEquals(info.getText(), "Danger! Data Tidak Ada!!!\n" + "×");
		driver.close();
	}

	@When("klik download")
	public void klik_download() {
		WebElement btn_download = driver.findElement(By.xpath("//button[normalize-space()='Download']"));
		btn_download.click();
	}

	@Then("data berhasil didownload")
	public void data_berhasil_didownload() {
		System.out.println("berhasil didownload");
		driver.close();
	}

	@When("klik donwload")
	public void klik_donwload() {
		WebElement btn_download = driver.findElement(By.xpath("//button[normalize-space()='Download']"));
		btn_download.click();
	}

	@Then("user mendapat notif Danger! Data Tidak Ada")
	public void user_mendapat_notif_Danger_Data_Tidak_Ada() {
		WebElement info = driver.findElement(By.xpath("//div[@role='alert']"));
		assertEquals(info.getText(), "Danger! Data Tidak Ada!!!\n" + "×");
		driver.close();
	}

	@Then("user No terisi")
	public void user_No_terisi() {
		WebElement no = driver.findElement(By.xpath("//td[normalize-space()='1']"));
		assertEquals(no.getText(), "1");
		driver.close();
	}

	@Then("user melihat Action \\(View)")
	public void user_melihat_Action_View() {
		WebElement action = driver.findElement(
				By.xpath("//body[1]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/a[1]"));
		assertEquals(action.getText(), "View");
		driver.close();

	}

	@Then("user melihat Tanggal Submit")
	public void user_melihat_Tanggal_Submit() {
		WebElement tgl_submit=driver.findElement(By.xpath("// td[normalize-space()='2022-08-01 12:37:48']"));
	    assertEquals(tgl_submit.getText(), "2022-08-01 12:37:48");
	    driver.close();
		
	}

	@Then("user melihat Nama")
	public void user_melihat_Nama() {
		WebElement nama = driver.findElement(By.xpath("//td[normalize-space()='ELVA YUNDRA RINDYANA']"));
		assertEquals(nama.getText(), "ELVA YUNDRA RINDYANA");
		driver.close();
	}

	@Then("user melihat Nomor BPJS")
	public void user_melihat_Nomor_BPJS() {
		WebElement no_bpjs = driver.findElement(By.xpath("//td[normalize-space()='1234567890123']"));
		assertEquals(no_bpjs.getText(), "1234567890123");
		driver.close();
	}

	@Then("user melihat Nomor KTP")
	public void user_melihat_Nomor_KTP() {
		WebElement no_ktp = driver.findElement(By.xpath("//td[normalize-space()='0987654345678987']"));
		assertEquals(no_ktp.getText(), "0987654345678987");
		driver.close();
	}

	@Then("user melihat foto Faskes Awal")
	public void user_melihat_foto_Faskes_Awal() {
		WebElement faskes_awal = driver.findElement(By.xpath("//body[1]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/a[1]"));
		assertEquals(faskes_awal.getText(), "Foto Faskes Awal");
		driver.close();
	}

	@Then("user melihat foto faskes tujuan")
	public void user_melihat_foto_faskes_tujuan() {
		WebElement faskes_tujuan = driver.findElement(By.xpath("//body[1]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[8]/a[1]"));
		assertEquals(faskes_tujuan.getText(), "Foto Faskes Tujuan");
		driver.close();
	}

	@Then("user melihat Aggrement")
	public void user_melihat_Aggrement() {
		WebElement no = driver.findElement(By.xpath("//body[1]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[9]/a[1]"));
		assertEquals(no.getText(), "PDF Agreement");
		driver.close();
	}
	
	@When("klik refresh")
	public void klik_refresh() {
	   WebElement button_refresh=driver.findElement(By.xpath("//a[@title='Refresh']"));
	   button_refresh.click();
	}

	@Then("user melihat data terrefresh")
	public void user_melihat_data_terrefresh() {
		
		WebElement Detail_data = driver.findElement(By.xpath("//li[@class='breadcrumb-item active']"));
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		assertEquals(Detail_data.getText(), "View & Export Data");
		driver.close();
	}

}
