package com.siloam.plugin;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverSet {
	
	static String url = "https://dev.ptdika.com/siloam/";
//	private static WebDriver driver;

	public static String getPath() {
		String path = null;
		try (FileInputStream f = new FileInputStream("local.properties")) {
		Properties pros = new Properties();
		pros.load(f);
		path = pros.getProperty("path");
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
		return path;
	}
	
	public static WebDriver setProperties() {
		System.setProperty("webdriver.chrome.driver", DriverSet.getPath());
		WebDriver driver = new ChromeDriver();
		driver.navigate().to(url);
		driver.manage().window().maximize();
		return driver;
	}
	
	
	
}
