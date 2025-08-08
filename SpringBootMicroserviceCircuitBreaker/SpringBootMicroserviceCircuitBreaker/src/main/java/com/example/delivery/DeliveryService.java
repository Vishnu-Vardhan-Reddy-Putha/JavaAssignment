package com.example.delivery;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DeliveryService {

    private final RestTemplate restTemplate;
    private final FallbackService fallbackService;

    public DeliveryService(FallbackService fallbackService) {
        this.restTemplate = new RestTemplate();
        this.fallbackService = fallbackService;
    }

    @CircuitBreaker(name = "deliveryService", fallbackMethod = "fallbackGetDeliveryStatus")
    public String getDeliveryStatus() {
        String url = "http://localhost:8081/delivery/status";
        return restTemplate.getForObject(url, String.class);
    }

    public String fallbackGetDeliveryStatus(Throwable t) {
        return fallbackService.getFallbackStatus();
    }
}
