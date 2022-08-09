$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UploadDocument.feature");
formatter.feature({
  "name": "Upload Dokumen Testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Akses menu upload document",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sales akses url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_sales_akses_url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d104.0.5112.79)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-BUM46IKV\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.79, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Ben\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:61596}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d587abf8ee83155dbaa08ae0a8f8d0d4\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\"username\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.siloam.plugin.LoginStep.loginSales(LoginStep.java:27)\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_sales_akses_url(UploadDocumentStepDef.java:24)\r\n\tat ✽.User sales akses url(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User sales akses menu upload",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_sales_akses_menu_upload()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Menampilkan halaman upload document",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.menampilkan_halaman_upload_document()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Klik cancel button saat menambahkan foto faskes awal",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto(UploadDocumentStepDef.java:44)\r\n\tat ✽.User tambah foto(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:10)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "klik tombol cancel",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.klik_tombol_cancel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "halaman kembali ke menu upload tanpa foto terupload",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.halaman_kembali_ke_menu_upload_tanpa_foto_terupload()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Upload foto faskes awal file size diatas 5mb",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto faskes awal",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_awal()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_awal(UploadDocumentStepDef.java:62)\r\n\tat ✽.User tambah foto faskes awal(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:15)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Upload tidak diproses",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.upload_tidak_diproses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Muncul notifikasi upload error",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.muncul_notifikasi_upload_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Upload foto faskes awal dengan file selain format image",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto faskes awal",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_awal()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_awal(UploadDocumentStepDef.java:62)\r\n\tat ✽.User tambah foto faskes awal(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:20)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Upload tidak diproses",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.upload_tidak_diproses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Muncul notifikasi upload error",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.muncul_notifikasi_upload_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Upload foto faskes awal dengan benar",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto faskes awal",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_awal()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_awal(UploadDocumentStepDef.java:62)\r\n\tat ✽.User tambah foto faskes awal(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:25)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Muncul pop up data berhasil diupload",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.muncul_pop_up_data_berhasil_diupload()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kembali ke menu sebelumnya menampilkan foto yang terupload",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.kembali_ke_menu_sebelumnya_menampilkan_foto_yang_terupload()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Klik cancel button saat menambahkan foto faskes tujuan",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto(UploadDocumentStepDef.java:44)\r\n\tat ✽.User tambah foto(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:31)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "klik tombol cancel",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.klik_tombol_cancel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "halaman kembali ke menu upload tanpa foto terupload",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.halaman_kembali_ke_menu_upload_tanpa_foto_terupload()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Upload foto faskes tujuan file size diatas 5mb",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto faskes tujuan",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_tujuan()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_tujuan(UploadDocumentStepDef.java:92)\r\n\tat ✽.User tambah foto faskes tujuan(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:36)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Upload tidak diproses",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.upload_tidak_diproses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Muncul notifikasi upload error",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.muncul_notifikasi_upload_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Upload foto faskes tujuan dengan file selain format image",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto faskes tujuan",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_tujuan()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_tujuan(UploadDocumentStepDef.java:92)\r\n\tat ✽.User tambah foto faskes tujuan(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:41)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Upload tidak diproses",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.upload_tidak_diproses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Muncul notifikasi upload error",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.muncul_notifikasi_upload_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Upload foto faskes tujuan dengan benar",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto faskes tujuan",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_tujuan()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_tujuan(UploadDocumentStepDef.java:92)\r\n\tat ✽.User tambah foto faskes tujuan(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:46)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Muncul pop up data berhasil diupload",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.muncul_pop_up_data_berhasil_diupload()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kembali ke menu sebelumnya menampilkan foto yang terupload",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.kembali_ke_menu_sebelumnya_menampilkan_foto_yang_terupload()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Klik cancel button saat menambahkan foto ttd",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto(UploadDocumentStepDef.java:44)\r\n\tat ✽.User tambah foto(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:52)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "klik tombol cancel",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.klik_tombol_cancel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "halaman kembali ke menu upload tanpa foto terupload",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.halaman_kembali_ke_menu_upload_tanpa_foto_terupload()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Upload foto ttd file size diatas 5mb",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto ttd",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_ttd()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_ttd(UploadDocumentStepDef.java:98)\r\n\tat ✽.User tambah foto ttd(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:57)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Upload tidak diproses",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.upload_tidak_diproses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Muncul notifikasi upload error",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.muncul_notifikasi_upload_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Upload foto ttd dengan file selain format image",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto ttd",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_ttd()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_ttd(UploadDocumentStepDef.java:98)\r\n\tat ✽.User tambah foto ttd(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:62)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Upload tidak diproses",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.upload_tidak_diproses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Muncul notifikasi upload error",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.muncul_notifikasi_upload_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Upload foto ttd dengan benar",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User tambah foto ttd",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_ttd()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_ttd(UploadDocumentStepDef.java:98)\r\n\tat ✽.User tambah foto ttd(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:67)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Muncul pop up data berhasil diupload",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.muncul_pop_up_data_berhasil_diupload()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kembali ke menu sebelumnya menampilkan foto yang terupload",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.kembali_ke_menu_sebelumnya_menampilkan_foto_yang_terupload()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Menambahkan lengkap foto yang diminta sistem",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User upload tiga foto yang diminta sistem",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_upload_tiga_foto_yang_diminta_sistem()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_upload_tiga_foto_yang_diminta_sistem(UploadDocumentStepDef.java:104)\r\n\tat ✽.User upload tiga foto yang diminta sistem(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:73)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Tampil notifikasi Terima kasih dokumen anda sudah lengkap!",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.tampil_notifikasi_Terima_kasih_dokumen_anda_sudah_lengkap()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Tombol selanjutnya menuju menu TTD aktif",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.tombol_selanjutnya_menuju_menu_TTD_aktif()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Klik button selanjutnya menu upload dokumen",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User klik button selanjutnya",
  "keyword": "When "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.user_klik_button_selanjutnya()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_klik_button_selanjutnya(UploadDocumentStepDef.java:122)\r\n\tat ✽.User klik button selanjutnya(file:///C:/Users/Ben/eclipse-workspace/SiloamTest/src/test/resources/features/UploadDocument.feature:78)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Menampilkan alert verifikasi lanjut ke tahap selanjutnya",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.menampilkan_alert_verifikasi_lanjut_ke_tahap_selanjutnya()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Menampilkan halaman menu ttd dengan review data",
  "keyword": "And "
});
formatter.match({
  "location": "com.siloam.uploaddoc.UploadDocumentStepDef.menampilkan_halaman_menu_ttd_dengan_review_data()"
});
formatter.result({
  "status": "skipped"
});
});