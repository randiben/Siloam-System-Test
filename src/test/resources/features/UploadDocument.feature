Feature: Upload Dokumen Testing

	Scenario: Akses menu upload document
		Given User sales akses url
		When User sales akses menu upload
		Then Menampilkan halaman upload document "Data berhasil Di Simpan"
	
	#Foto Faskes Awal
	Scenario: Klik cancel button saat menambahkan foto faskes awal
		When User tambah foto
		And klik tombol cancel
		Then halaman kembali ke menu upload tanpa foto terupload "https://dev.ptdika.com/siloam/new_assets/noimage.png"

	Scenario: Upload foto faskes awal file size diatas 5mb
		When User tambah foto faskes awal size besar
		Then Upload size error "Upload error: The file you are attempting to upload is larger than the permitted size."
	
	Scenario: Upload foto faskes awal dengan file selain format image
		When User tambah foto faskes awal format bukan image
		Then Upload format error "Upload error: The filetype you are attempting to upload is not allowed."
		
	Scenario: Upload foto faskes awal dengan benar
		When User tambah foto faskes awal dengan benar
		Then Muncul pop up berhasil diupload "Data Berhasil diupload!"
		
		
	#Foto Faskes Tujuan	
	Scenario: Klik cancel button saat menambahkan foto faskes tujuan
		When User cancel tambah foto faskes tujuan
		Then foto faskes tujuan tidak diupload "https://dev.ptdika.com/siloam/new_assets/noimage.png"
	
	Scenario: Upload foto faskes tujuan file size diatas 5mb
		When User tambah foto faskes tujuan size besar
		Then Upload foto faskes tujuan size error "Upload error: The file you are attempting to upload is larger than the permitted size."
		
	Scenario: Upload foto faskes tujuan dengan file selain format image
		When User tambah foto faskes tujuan bukan image
		Then Upload foto faskes tujuan format error "Upload error: The filetype you are attempting to upload is not allowed."
		
	Scenario: Upload foto faskes tujuan dengan benar
		When User tambah foto faskes tujuan
		Then Muncul pop up foto tujuan berhasil "Data Berhasil diupload!"
		
	#Tanda Tangan Digital
	Scenario: Klik cancel button saat menambahkan foto ttd
		When User cancel tambah foto ttd
		Then foto ttd tidak diupload "https://dev.ptdika.com/siloam/new_assets/noimage.png"
		
	Scenario: Upload foto ttd file size diatas 5mb
		When User tambah foto ttd size besar
		Then Upload foto ttd size error "Upload error: The file you are attempting to upload is larger than the permitted size."
		
	Scenario: Upload foto ttd dengan file selain format image
		When User tambah foto ttd bukan image
		Then Upload foto ttd format error "Upload error: The filetype you are attempting to upload is not allowed."
		
	Scenario: Upload foto ttd dengan benar
		When User tambah foto ttd
		Then Muncul pop up foto ttd berhasil "Data Berhasil diupload!"
			
			
	Scenario: Menambahkan lengkap foto yang diminta sistem
		When User upload tiga foto yang diminta sistem
		Then Tampil notifikasi dokumen lengkap "Terima kasih dokumen anda sudah lengkap !"
		
	Scenario: Klik button selanjutnya menu upload dokumen
		When User klik button selanjutnya
		And Menampilkan halaman menu ttd "nav-link active"
	
	
	
	