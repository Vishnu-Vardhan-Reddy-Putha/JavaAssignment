package com.WiproSpringboot.SpringBootAss;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
public class ClassKLM {

    @Autowired
    @Qualifier("classABC")
    InterfacePQR pqr;

    @PostConstruct
    public void init() {
        pqr.display(); // will call ClassABC’s display method
    }
}
