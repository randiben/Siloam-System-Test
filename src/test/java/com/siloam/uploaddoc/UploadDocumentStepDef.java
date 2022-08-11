package com.siloam.uploaddoc;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.siloam.plugin.DriverSet;
import com.siloam.plugin.Input;
import com.siloam.plugin.LoginStep;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class UploadDocumentStepDef {
//	private static WebDriver driver;
	
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

	@Then("Menampilkan halaman upload document")
	public void menampilkan_halaman_upload_document() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User tambah foto")
	public void user_tambah_foto() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("klik tombol cancel")
	public void klik_tombol_cancel() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("halaman kembali ke menu upload tanpa foto terupload")
	public void halaman_kembali_ke_menu_upload_tanpa_foto_terupload() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User tambah foto faskes awal")
	public void user_tambah_foto_faskes_awal() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Upload tidak diproses")
	public void upload_tidak_diproses() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Muncul notifikasi upload error")
	public void muncul_notifikasi_upload_error() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Muncul pop up data berhasil diupload")
	public void muncul_pop_up_data_berhasil_diupload() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Kembali ke menu sebelumnya menampilkan foto yang terupload")
	public void kembali_ke_menu_sebelumnya_menampilkan_foto_yang_terupload() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User tambah foto faskes tujuan")
	public void user_tambah_foto_faskes_tujuan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User tambah foto ttd")
	public void user_tambah_foto_ttd() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User upload tiga foto yang diminta sistem")
	public void user_upload_tiga_foto_yang_diminta_sistem() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Tampil notifikasi Terima kasih dokumen anda sudah lengkap!")
	public void tampil_notifikasi_Terima_kasih_dokumen_anda_sudah_lengkap() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Tombol selanjutnya menuju menu TTD aktif")
	public void tombol_selanjutnya_menuju_menu_TTD_aktif() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User klik button selanjutnya")
	public void user_klik_button_selanjutnya() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Menampilkan alert verifikasi lanjut ke tahap selanjutnya")
	public void menampilkan_alert_verifikasi_lanjut_ke_tahap_selanjutnya() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Menampilkan halaman menu ttd dengan review data")
	public void menampilkan_halaman_menu_ttd_dengan_review_data() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


}
