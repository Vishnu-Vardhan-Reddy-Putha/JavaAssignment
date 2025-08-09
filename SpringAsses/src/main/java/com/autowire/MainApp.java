package com.example.autowire;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Scanner;

public class MainApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("==============================");
        System.out.println("|  AUTOWIRED ANNOTATION DEMO |");
        System.out.println("==============================");
        System.out.println("Options:");
        System.out.println("1. Autowired");
        System.out.println("2. Autowired with Qualifier");
        System.out.print("Select option: ");

        int option = scanner.nextInt();
        scanner.close();

        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        Freshman freshman = context.getBean(Freshman.class);

        switch (option) {
            case 1:
                System.out.println("==> Autowired:");
                break;
            case 2:
                System.out.println("==> Autowired with Qualifier:");
                break;
            default:
                System.out.println("Invalid option.");
                return;
        }

        System.out.println("Student Name: " + freshman.getName());
        System.out.println("Room Location: " + freshman.getRoom());
    }
}


/*
 ==============================
|  AUTOWIRED ANNOTATION DEMO |
==============================
Options:
1. Autowired
2. Autowired with Qualifier
Select option: 1
==> Autowired:
Student Name: John Doe
Room Location: Dorm #102, Building B
*/
