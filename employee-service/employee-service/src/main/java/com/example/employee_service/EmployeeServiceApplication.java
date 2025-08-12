package com.example.employee_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@RequestMapping("/employee")
public class EmployeeServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeServiceApplication.class, args);
    }

    @GetMapping("/info")
    public String getEmployeeInfo(@RequestHeader(value = "X-Request-Foo", required = false) String header) {
        return "Employee Info from backend. Header = " + header;
    }
}


//http://localhost:9091/employee/info
//After this execution go to api-gateway