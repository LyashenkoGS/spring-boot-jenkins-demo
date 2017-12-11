package com.example;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootJenkinsWorkshopApplicationTests {


	@Test
	public void contextLoads() {
		//explicitly broken test
		Assert.assertEquals(1, 0);
		//aa
	}


}
