package com.example.demo;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.example.demo")
public class AppConfig {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        CredentialReader reader = context.getBean(CredentialReader.class);
        reader.printCredentials();

        context.close();
    }
}


/* 
URL: http://gmail.com
Username: putha
Password: password123
*/