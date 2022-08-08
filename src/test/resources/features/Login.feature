Feature: Login to Website

	Scenario: Masuk dengan tidak memasukan username
		Given User berada di dalam halaman login
		When User memasukan username ""
		And User menekan tombol Login
		Then User mendapatkan kata informasi pada bagian username
		
	Scenario: Masuk dengan tidak memasukan password
		Given User berada di dalam halaman login
		When User memasukan username "anggis15"
		And User memasukan password ""
		And User menekan tombol Login
		Then User mendapatkan kata informasi pada bagian password
		
	Scenario: Masuk dengan username salah dan password benar
		Given User berada di dalam halaman login
		When User memasukan username "anggis15"
		And User memasukan password "lalala"
		And User menekan tombol Login
		Then User mendapatkan kata informasi gagal login
		
	Scenario: Masuk dengan username benar dan password salah
		Given User berada di dalam halaman login
		When User memasukan username "anggis15"
		And User memasukan password "lalala"
		And User menekan tombol Login
		Then User mendapatkan kata informasi gagal login
		
	Scenario: Masuk dengan valid account
		Given User berada di dalam halaman login
		When User memasukan username "D6200927"
		And User memasukan password "19971023"
		And User menekan tombol Login
		Then User berhasil login dan berada dalam halaman home