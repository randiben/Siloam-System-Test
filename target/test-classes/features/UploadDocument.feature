Feature: Upload Dokumen Testing

	Scenario: Akses menu upload document
		When User sales akses menu upload
		Then Menampilkan halaman upload document
	
	#Foto Faskes Awal
	Scenario: Klik cancel button saat menambahkan foto faskes awal
		When User tambah foto
		And klik tombol cancel
		Then halaman kembali ke menu upload tanpa foto terupload

	Scenario: Upload foto faskes awal file size diatas 5mb
		When User tambah foto faskes awal
		Then Upload tidak diproses
		And Muncul notifikasi upload error
	
	Scenario: Upload foto faskes awal dengan file selain format image
		When User tambah foto faskes awal
		Then Upload tidak diproses
		And Muncul notifikasi upload error
		
	Scenario: Upload foto faskes awal dengan benar
		When User tambah foto faskes awal
		Then Muncul pop up data berhasil diupload
		And Kembali ke menu sebelumnya menampilkan foto yang terupload
		
	#Foto Faskes Tujuan	
	Scenario: Klik cancel button saat menambahkan foto faskes tujuan
		When User tambah foto
		And klik tombol cancel
		Then halaman kembali ke menu upload tanpa foto terupload
	
	Scenario: Upload foto faskes tujuan file size diatas 5mb
		When User tambah foto faskes tujuan
		Then Upload tidak diproses
		And Muncul notifikasi upload error
		
	Scenario: Upload foto faskes tujuan dengan file selain format image
		When User tambah foto faskes tujuan
		Then Upload tidak diproses
		And Muncul notifikasi upload error
		
	Scenario: Upload foto faskes tujuan dengan benar
		When User tambah foto faskes tujuan
		Then Muncul pop up data berhasil diupload
		And Kembali ke menu sebelumnya menampilkan foto yang terupload
		
	#Tanda Tangan Digital
	Scenario: Klik cancel button saat menambahkan foto ttd
		When User tambah foto
		And klik tombol cancel
		Then halaman kembali ke menu upload tanpa foto terupload
	
	Scenario: Upload foto ttd file size diatas 5mb
		When User tambah foto ttd
		Then Upload tidak diproses
		And Muncul notifikasi upload error
		
	Scenario: Upload foto ttd dengan file selain format image
		When User tambah foto ttd
		Then Upload tidak diproses
		And Muncul notifikasi upload error
		
	Scenario: Upload foto ttd dengan benar
		When User tambah foto ttd
		Then Muncul pop up data berhasil diupload
		And Kembali ke menu sebelumnya menampilkan foto yang terupload
			
			
	Scenario: Menambahkan lengkap foto yang diminta sistem
		When User upload tiga foto yang diminta sistem
		Then Tampil notifikasi Terima kasih dokumen anda sudah lengkap!
		And Tombol selanjutnya menuju menu TTD aktif
		
	Scenario: Klik button selanjutnya menu upload dokumen
		When User klik button selanjutnya
		Then Menampilkan alert verifikasi lanjut ke tahap selanjutnya
		And Menampilkan halaman menu ttd dengan review data
	
	
	
	