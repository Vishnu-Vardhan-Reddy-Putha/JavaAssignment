package com.example.consumer.controller;

import com.example.consumer.entity.Ride;
import com.example.consumer.repository.RideRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rides")
public class RideController {

    private final RideRepository repository;

    public RideController(RideRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Ride> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Ride getOne(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }
}
