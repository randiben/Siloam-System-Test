$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ViewExport.feature");
formatter.feature({
  "name": "Test View and Export",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login sebagai admin",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user berada di dashboard admin",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "klik menu view \u0026 export",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View \u0026 Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user berada di halaman View \u0026 Export",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "klik button export saat data default(kosong)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View \u0026 Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik button export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user mendapatkan notif \"Danger! Mohon isi start_date dan end_date terlebih dahulu!!!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "klik button download saat data default(kosong)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View \u0026 Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik button download",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user mendapatkan notif \"Danger! Mohon isi start_date dan end_date terlebih dahulu!!!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "menentukan start-date dan end-date terus filter data valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View and Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user user isi start date \"2022-08-01\" end date \"2022-08-02\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik filter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user melihat data ditemukan",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "menentukan start-date dan end-date terus filter data invalid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View and Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user user isi start date \"2022-08-04\" end date \"2022-08-20\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik filter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user melihat data tidak ditemukan",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "klik View pada Data yang dipilih",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View and Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user user isi start date \"2022-08-01\" end date \"2022-08-02\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik filter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik View pada Data",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user melihat detail \"View Data\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "klik button export data valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View and Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user user isi start date \"2022-08-01\" end date \"2022-08-02\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik filter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "data berhasil di export",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "klik button export data invalid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View and Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user user isi start date \"2022-08-04\" end date \"2022-08-20\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik filter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user mendapat notif \"Danger! Data Tidak Ada!!!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "klik button download data valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View and Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user user isi start date \"2022-08-01\" end date \"2022-08-02\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik filter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik download",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "data berhasil didownload",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "klik button download data invalid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user berada di halaman login sebagai admin \"https://dev.ptdika.com/siloam/panel/login/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user input username \"admindika\" password \"d1k4@passw0rd\" dan klik login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user klik menu View and Export",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user user isi start date \"2022-08-04\" end date \"2022-08-20\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik filter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "klik donwload",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user mendapat notif \"Danger! Data Tidak Ada!!!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});