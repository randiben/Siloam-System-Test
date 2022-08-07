Feature: Test View and Export

Scenario: login sebagai admin
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
Then user berada di dashboard admin

Scenario: klik menu view & export
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View & Export 
Then user berada di halaman View & Export

Scenario: klik button export saat data default(kosong)
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View & Export 
And user klik button export
Then user mendapatkan notif "Danger! Mohon isi start_date dan end_date terlebih dahulu!!!"

Scenario: klik button download saat data default(kosong)
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View & Export 
And user klik button download
Then user mendapatkan notif "Danger! Mohon isi start_date dan end_date terlebih dahulu!!!"

Scenario: menentukan start-date dan end-date terus filter data valid
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View and Export
And user user isi start date "2022-08-01" end date "2022-08-02" 
And klik filter
Then user melihat data ditemukan

Scenario: menentukan start-date dan end-date terus filter data invalid
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View and Export
And user user isi start date "2022-08-04" end date "2022-08-20" 
And klik filter
Then user melihat data tidak ditemukan

Scenario: klik View pada Data yang dipilih
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View and Export
And user user isi start date "2022-08-01" end date "2022-08-02" 
And klik filter
And klik View pada Data
Then user melihat detail "View Data"

Scenario: klik button export data valid
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View and Export
And user user isi start date "2022-08-01" end date "2022-08-02" 
And klik filter
And klik export
Then data berhasil di export

Scenario: klik button export data invalid
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View and Export
And user user isi start date "2022-08-04" end date "2022-08-20" 
And klik filter
And klik export
Then user mendapat notif "Danger! Data Tidak Ada!!!"

Scenario: klik button download data valid
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View and Export
And user user isi start date "2022-08-01" end date "2022-08-02" 
And klik filter
And klik download
Then data berhasil didownload

Scenario: klik button download data invalid
Given user berada di halaman login sebagai admin "https://dev.ptdika.com/siloam/panel/login/"
When user input username "admindika" password "d1k4@passw0rd" dan klik login
And user klik menu View and Export
And user user isi start date "2022-08-04" end date "2022-08-20" 
And klik filter
And klik donwload
Then user mendapat notif "Danger! Data Tidak Ada!!!"
