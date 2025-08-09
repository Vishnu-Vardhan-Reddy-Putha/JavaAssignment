package com.example.autowire;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.example.autowire")
public class AppConfig {

    @Bean(name = "dormRoom1")
    public DormRoom dormRoom1() {
        return new DormRoom(101, "A");
    }

    @Bean(name = "dormRoom2")
    public DormRoom dormRoom2() {
        return new DormRoom(102, "B");
    }
}
