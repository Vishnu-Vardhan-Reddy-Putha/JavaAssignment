package com.WiproSpringboot.SpringBootAss;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    @Autowired
    @Qualifier("classABC")
    InterfacePQR pqr;

    @GetMapping("/display")
    public String displayMessage() {
        pqr.display(); // will still print in console
        return "Display method called. See Console for output.";
    }
}


//http://localhost:8082/display 