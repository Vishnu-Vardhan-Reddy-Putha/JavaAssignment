package com.example.producer.controller;

import com.example.producer.model.Ride;
import com.example.producer.service.KafkaProducerService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rides")
public class RideController {

    private final KafkaProducerService producer;
    private final ObjectMapper mapper = new ObjectMapper();

    public RideController(KafkaProducerService producer) {
        this.producer = producer;
    }

    @PostMapping
    public String createRide(@RequestBody Ride ride) throws Exception {
        ride.setOperation("CREATE");
        String json = mapper.writeValueAsString(ride);
        producer.sendMessage(json);
        return "Ride Created and sent to Kafka!";
    }

    @PutMapping("/{id}")
    public String updateRide(@PathVariable Long id, @RequestBody Ride ride) throws Exception {
        ride.setOperation("UPDATE");
        ride.setId(id);
        String json = mapper.writeValueAsString(ride);
        producer.sendMessage(json);
        return "Ride Updated!";
    }

    @DeleteMapping("/{id}")
    public String deleteRide(@PathVariable Long id) throws Exception {
        Ride ride = new Ride();
        ride.setOperation("DELETE");
        ride.setId(id);
        String json = mapper.writeValueAsString(ride);
        producer.sendMessage(json);
        return "Ride Deleted!";
    }
}
