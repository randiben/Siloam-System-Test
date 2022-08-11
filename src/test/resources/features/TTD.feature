Feature: Upload Dokumen Testing

	Scenario: Klik button Collapse / Expand
		When User klik button collapse / Expand
		Then Layout menu dihilangkan / diperlebar
		
	Scenario: Edit data
		When User klik tombol edit data
		Then Form menu input menjadi aktif
	
	Scenario: Form input nama
		When User ubah nama
		Then Nama berubah sesuai inputan
		
	Scenario: Form input nomor bpjs
		When User ubah nomor bpjs
		Then Nomor bpjs berubah sesuai inputan
	
	Scenario: Form input nomor ktp
		When User ubah nomor ktp
		Then Nomor ktp berubah sesuai inputan
	
	Scenario: Form input alamat
		When User ubah alamat
		Then Alamat berubah sesuai inputan
	
	Scenario: Form input kota ktp
		When User ubah kota ktp
		Then kota ktp berubah sesuai pilihan
		
	Scenario: Form input faskes awal
		When User ubah faskes awal
		Then faskes awal berubah sesuai pilihan
	
	Scenario: Form input faskes tujuan
		When User ubah faskes tujuan
		Then faskes tujuan berubah sesuai pilihan
	
	Scenario: Form input alasan
		When User ubah alasan
		Then alasan berubah sesuai pilihan
	
	Scenario: Button cancel edit
		When User klik cancel button saat edit
		Then Menu input data nonaktif
		And Data tidak berubah
		
	Scenario: Delete file dokumen
		When User hapus file
		Then tampil alert konfirmasi lalu file terhapus
		And Button submit nonaktif
		
	Scenario: Preview dokumen perjanjian
		When User check preview perjanjian
		Then Data sama dengan inputan
		
	Scenario: Button submit
		When User klik button submit
		And klik ok alert verifikasi
		Then Menampilkan halaman input data dan notifikasi ttd digital berhasil			
		
	
	
	