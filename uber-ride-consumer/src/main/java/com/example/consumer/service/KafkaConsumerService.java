package com.example.consumer.service;

import com.example.consumer.entity.Ride;
import com.example.consumer.repository.RideRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    private final RideRepository repository;
    private final ObjectMapper mapper = new ObjectMapper();

    public KafkaConsumerService(RideRepository repository) {
        this.repository = repository;
    }

    @KafkaListener(topics = "uber-ride-topic", groupId = "uber_ride_group")
    public void consume(String message) throws Exception {
        JsonNode json = mapper.readTree(message);
        String operation = json.get("operation").asText();

        if ("CREATE".equals(operation) || "UPDATE".equals(operation)) {
            Ride ride = mapper.treeToValue(json, Ride.class);
            repository.save(ride);
        } else if ("DELETE".equals(operation)) {
            Long id = json.get("id").asLong();
            repository.deleteById(id);
        }
    }
}
