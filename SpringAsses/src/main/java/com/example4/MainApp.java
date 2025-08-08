package com.example4;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.example.Account;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("accountContext.xml");
        Account account = (Account) context.getBean("account");
        account.displayDetails();
    }
}
