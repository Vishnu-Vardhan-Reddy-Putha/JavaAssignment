package com.example.delivery_external;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DeliveryExternalApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeliveryExternalApplication.class, args);
	}

}

//http://localhost:8081/delivery/status
//output:Delivery Service is UP (from external API)