package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringBootJenkinsWorkshopApplication {
    private static long counter = 0;

    public static void main(String[] args) {
        SpringApplication.run(SpringBootJenkinsWorkshopApplication.class, args);
    }

    @RequestMapping("/")
    String home() {
        System.out.println("the index page accessed: " + counter + " times!");
        return "Hello! " + counter++;
    }
}
