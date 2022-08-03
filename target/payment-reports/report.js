$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AksesSite.feature");
formatter.feature({
  "name": "User Sales Login ke Siloam Project",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing Menampilkan Halaman Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User mengakses url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.siloam.StepDefinitions.user_mengakses_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menampillkan halaman login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.siloam.StepDefinitions.user_menampillkan_halaman_login()"
});
formatter.result({
  "status": "passed"
});
});