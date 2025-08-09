package com.example.autowire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Freshman {

    private String name;

    @Autowired // Autowired with or without @Qualifier
    @Qualifier("dormRoom2")  // Remove this line for basic @Autowired demo
    private DormRoom room;

    public Freshman() {
        this.name = "John Doe";
    }

    public String getName() {
        return name;
    }

    public String getRoom() {
        return room.getLocation();
    }
}
