package com.siloam.ttd;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import org.openqa.selenium.By;

import com.siloam.plugin.DriverSet;
import com.siloam.plugin.Input;
import com.siloam.plugin.LoginStep;

public class TtdStepDef {
	
	
	String actualResult = null;
	
	
	@When("User klik button collapse expand")
	public void user_klik_button_collapse_expand() {
		DriverSet.getDriver().findElement(By.xpath("//a[@data-click='panel-collapse']")).click();		
	}

	@Then("Layout menu dihilangkan diperlebar {string}")
	public void layout_menu_dihilangkan_diperlebar() {
	    actualResult = DriverSet.getDriver().findElement(By.xpath(
	    		"//*[@id=\"applicant_form\"]/div")).getAttribute("display");
	}

	@When("User klik tombol edit data")
	public void user_klik_tombol_edit_data() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Form menu input menjadi aktif")
	public void form_menu_input_menjadi_aktif() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User ubah nama")
	public void user_ubah_nama() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Nama berubah sesuai inputan")
	public void nama_berubah_sesuai_inputan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User ubah nomor bpjs")
	public void user_ubah_nomor_bpjs() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Nomor bpjs berubah sesuai inputan")
	public void nomor_bpjs_berubah_sesuai_inputan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User ubah nomor ktp")
	public void user_ubah_nomor_ktp() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Nomor ktp berubah sesuai inputan")
	public void nomor_ktp_berubah_sesuai_inputan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User ubah alamat")
	public void user_ubah_alamat() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Alamat berubah sesuai inputan")
	public void alamat_berubah_sesuai_inputan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User ubah kota ktp")
	public void user_ubah_kota_ktp() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("kota ktp berubah sesuai pilihan")
	public void kota_ktp_berubah_sesuai_pilihan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User ubah faskes awal")
	public void user_ubah_faskes_awal() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("faskes awal berubah sesuai pilihan")
	public void faskes_awal_berubah_sesuai_pilihan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User ubah faskes tujuan")
	public void user_ubah_faskes_tujuan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("faskes tujuan berubah sesuai pilihan")
	public void faskes_tujuan_berubah_sesuai_pilihan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User ubah alasan")
	public void user_ubah_alasan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("alasan berubah sesuai pilihan")
	public void alasan_berubah_sesuai_pilihan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User klik cancel button saat edit")
	public void user_klik_cancel_button_saat_edit() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Menu input data nonaktif")
	public void menu_input_data_nonaktif() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Data tidak berubah")
	public void data_tidak_berubah() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User hapus file")
	public void user_hapus_file() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("tampil alert konfirmasi lalu file terhapus")
	public void tampil_alert_konfirmasi_lalu_file_terhapus() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Button submit nonaktif")
	public void button_submit_nonaktif() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User check preview perjanjian")
	public void user_check_preview_perjanjian() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Data sama dengan inputan")
	public void data_sama_dengan_inputan() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("User klik button submit")
	public void user_klik_button_submit() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("klik ok alert verifikasi")
	public void klik_ok_alert_verifikasi() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Menampilkan halaman input data dan notifikasi ttd digital berhasil")
	public void menampilkan_halaman_input_data_dan_notifikasi_ttd_digital_berhasil() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

}
