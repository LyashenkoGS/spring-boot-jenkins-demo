package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringBootJenkinsWorkshopApplication {

	@RequestMapping("/")
	String home() {
		return "Siski!";
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringBootJenkinsWorkshopApplication.class, args);
	}
}
