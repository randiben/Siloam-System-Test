package com.siloam;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ViewExportStepDefs {
	WebDriver driver = null;

	@Given("user berada di halaman login sebagai admin {string}")
	public void user_berada_di_halaman_login_sebagai_admin(String string) {
		System.setProperty("webdriver.chrome.driver", "/home/ancient/Downloads/chromedriver_linux64/chromedriver");
		this.driver = new ChromeDriver();
		driver.get(string);
	}

	@When("user input username {string} password {string} dan klik login")
	public void user_input_username_password_dan_klik_login(String string, String string2) {

	}

	@Then("user berada di dashboard admin")
	public void user_berada_di_dashboard_admin() {

	}

	@When("user klik menu View & Export")
	public void user_klik_menu_View_Export() {

	}

	@Then("user berada di halaman View & Export")
	public void user_berada_di_halaman_View_Export() {
	}

	@When("user klik button export")
	public void user_klik_button_export() {
	}

	@Then("user mendapatkan notif {string}")
	public void user_mendapatkan_notif(String string) {
	}

	@When("user klik button download")
	public void user_klik_button_download() {
	}

	@When("user klik menu View and Export")
	public void user_klik_menu_View_and_Export() {
	}

	@When("user user isi start date {string} end date {string}")
	public void user_user_isi_start_date_end_date(String string, String string2) {
	}

	@When("klik filter")
	public void klik_filter() {
	}

	@Then("user melihat data ditemukan")
	public void user_melihat_data_ditemukan() {
	}

	@Then("user melihat data tidak ditemukan")
	public void user_melihat_data_tidak_ditemukan() {
	}

	@When("klik View pada Data")
	public void klik_View_pada_Data() {
	}

	@Then("user melihat detail {string}")
	public void user_melihat_detail(String string) {
	}

	@When("klik export")
	public void klik_export() {
	}

	@Then("data berhasil di export")
	public void data_berhasil_di_export() {
	}

	@Then("user mendapat notif {string}")
	public void user_mendapat_notif(String string) {
	}

	@When("klik download")
	public void klik_download() {
	}

	@Then("data berhasil didownload")
	public void data_berhasil_didownload() {
	}

	@When("klik donwload")
	public void klik_donwload() {
	}
	

}
