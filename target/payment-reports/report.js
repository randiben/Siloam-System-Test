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
  "error_message": "java.lang.NoSuchMethodError: \u0027void com.siloam.plugin.DriverSet.setDriver()\u0027\n\tat com.siloam.plugin.LoginStep.loginSales(LoginStep.java:25)\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_sales_akses_url(UploadDocumentStepDef.java:24)\n\tat ✽.User sales akses url(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:4)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto(UploadDocumentStepDef.java:44)\n\tat ✽.User tambah foto(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:10)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_awal(UploadDocumentStepDef.java:62)\n\tat ✽.User tambah foto faskes awal(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:15)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_awal(UploadDocumentStepDef.java:62)\n\tat ✽.User tambah foto faskes awal(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:20)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_awal(UploadDocumentStepDef.java:62)\n\tat ✽.User tambah foto faskes awal(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:25)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto(UploadDocumentStepDef.java:44)\n\tat ✽.User tambah foto(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:31)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_tujuan(UploadDocumentStepDef.java:92)\n\tat ✽.User tambah foto faskes tujuan(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:36)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_tujuan(UploadDocumentStepDef.java:92)\n\tat ✽.User tambah foto faskes tujuan(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:41)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_faskes_tujuan(UploadDocumentStepDef.java:92)\n\tat ✽.User tambah foto faskes tujuan(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:46)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto(UploadDocumentStepDef.java:44)\n\tat ✽.User tambah foto(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:52)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_ttd(UploadDocumentStepDef.java:98)\n\tat ✽.User tambah foto ttd(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:57)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_ttd(UploadDocumentStepDef.java:98)\n\tat ✽.User tambah foto ttd(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:62)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_tambah_foto_ttd(UploadDocumentStepDef.java:98)\n\tat ✽.User tambah foto ttd(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:67)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_upload_tiga_foto_yang_diminta_sistem(UploadDocumentStepDef.java:104)\n\tat ✽.User upload tiga foto yang diminta sistem(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:73)\n",
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
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\n\tat com.siloam.uploaddoc.UploadDocumentStepDef.user_klik_button_selanjutnya(UploadDocumentStepDef.java:122)\n\tat ✽.User klik button selanjutnya(file:///home/ancient/Documents/MagangSQA/sqasiloamteamb/src/test/resources/features/UploadDocument.feature:78)\n",
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