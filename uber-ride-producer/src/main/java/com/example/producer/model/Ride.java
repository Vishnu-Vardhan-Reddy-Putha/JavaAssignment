package com.example.producer.model;

import lombok.Data;

@Data



public class Ride {

    private Long id;
    private String driverName;
    private String passengerName;
    private String pickupLocation;
    private String dropLocation;
    private Double fare;
    private String operation; // for CREATE / UPDATE / DELETE flag

    // Default constructor
    public Ride() {
    }

    // All-args constructor
    public Ride(Long id, String driverName, String passengerName, String pickupLocation,
                String dropLocation, Double fare, String operation) {
        this.id = id;
        this.driverName = driverName;
        this.passengerName = passengerName;
        this.pickupLocation = pickupLocation;
        this.dropLocation = dropLocation;
        this.fare = fare;
        this.operation = operation;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }

    public String getPickupLocation() {
        return pickupLocation;
    }

    public void setPickupLocation(String pickupLocation) {
        this.pickupLocation = pickupLocation;
    }

    public String getDropLocation() {
        return dropLocation;
    }

    public void setDropLocation(String dropLocation) {
        this.dropLocation = dropLocation;
    }

    public Double getFare() {
        return fare;
    }

    public void setFare(Double fare) {
        this.fare = fare;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    // toString() for debugging
    @Override
    public String toString() {
        return "Ride{" +
                "id=" + id +
                ", driverName='" + driverName + '\'' +
                ", passengerName='" + passengerName + '\'' +
                ", pickupLocation='" + pickupLocation + '\'' +
                ", dropLocation='" + dropLocation + '\'' +
                ", fare=" + fare +
                ", operation='" + operation + '\'' +
                '}';
    }
}
