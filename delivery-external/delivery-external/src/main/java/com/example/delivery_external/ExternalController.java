package com.example.delivery_external;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExternalController {

    @GetMapping("/delivery/status")
    public String getDeliveryStatus() {
        return "Delivery Service is UP (from external API)";
    }
}
