package com.example;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        Account account = (Account) context.getBean("account");

        account.displayDetails();
    }
}


/*
Account Number: 123456
Account Holder: John Doe
Balance: 5000.75
Bank Details: Bank ID: 101, Bank Name: State Bank
*/