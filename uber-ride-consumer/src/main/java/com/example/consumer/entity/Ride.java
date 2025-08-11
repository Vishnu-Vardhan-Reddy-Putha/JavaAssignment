package com.example.consumer.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
@SuppressWarnings("unused") // Prevent Eclipse from complaining about unused fields
public class Ride {

    @Id
    private Long id; // Primary Key

    private String driverName;      // Name of the driver
    private String passengerName;   // Name of the passenger
    private String pickupLocation;  // Start location
    private String dropLocation;    // Destination
    private Double fare;            // Fare amount

}
