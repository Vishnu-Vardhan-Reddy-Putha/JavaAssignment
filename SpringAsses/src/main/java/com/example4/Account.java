package com.example4;

public class Account {
    private int number;
    private String holder;
    private double balance;
    private String type;

    // ✅ DEFAULT CONSTRUCTOR (MANDATORY for Spring setter injection)
    public Account() {
        System.out.println("Account object created.");
    }

    // ✅ SETTERS (required if using <property> tags in XML)
    public void setNumber(int number) {
        this.number = number;
    }

    public void setHolder(String holder) {
        this.holder = holder;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void displayDetails() {
        System.out.println("Account Number: " + number);
        System.out.println("Account Holder: " + holder);
        System.out.println("Balance: " + balance);
        System.out.println("Account Type: " + type);
    }
}
