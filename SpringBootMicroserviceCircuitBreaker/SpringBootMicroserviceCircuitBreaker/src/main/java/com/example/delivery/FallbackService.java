package com.example.delivery;

import org.springframework.stereotype.Service;

@Service
public class FallbackService {

    public String getFallbackStatus() {
        return "Fallback: Delivery status currently unavailable.";
    }
}
