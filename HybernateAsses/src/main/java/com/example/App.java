package com.example;

import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int option;

        do {
            System.out.println("\n------------------------------");
            System.out.println("Hibernate Item CRUD");
            System.out.println("------------------------------");
            System.out.println("1. Add");
            System.out.println("2. View All");
            System.out.println("3. Update");
            System.out.println("4. Delete");
            System.out.println("5. Get by ID");
            System.out.println("0. Exit");
            System.out.print("Choose option: ");
            option = sc.nextInt();

            switch (option) {
            case 1:
                addItem(sc);
                break;
            case 2:
                viewAllItems();
                break;
            case 3:
                updateItem(sc);
                break;
            case 4:
                deleteItem(sc);
                break;
            case 5:
                getItemById(sc);
                break;
            case 0:
                System.out.println("Exiting...");
                break;
            default:
                System.out.println("Invalid option");
                break;
        }


        } while (option != 0);

        sc.close();
    }

    private static void addItem(Scanner sc) {
        System.out.print("Enter name: ");
        String name = sc.next();
        System.out.print("Enter price: ");
        double price = sc.nextDouble();

        Item item = new Item(name, price);
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.save(item);
        tx.commit();
        session.close();

        System.out.println("Item added.");
    }

    private static void viewAllItems() {
        Session session = HibernateUtil.getSessionFactory().openSession();
        List<Item> items = session.createQuery("from Item", Item.class).list();
        for (Item item : items) {
            System.out.println(item.getId() + " - " + item.getName() + " - " + item.getPrice());
        }
        session.close();
    }

    private static void updateItem(Scanner sc) {
        System.out.print("Enter item ID to update: ");
        int id = sc.nextInt();

        Session session = HibernateUtil.getSessionFactory().openSession();
        Item item = session.get(Item.class, id);
        if (item != null) {
            System.out.print("Enter new name: ");
            item.setName(sc.next());
            System.out.print("Enter new price: ");
            item.setPrice(sc.nextDouble());

            Transaction tx = session.beginTransaction();
            session.update(item);
            tx.commit();
            System.out.println("Item updated.");
        } else {
            System.out.println("Item not found.");
        }
        session.close();
    }

    private static void deleteItem(Scanner sc) {
        System.out.print("Enter item ID to delete: ");
        int id = sc.nextInt();

        Session session = HibernateUtil.getSessionFactory().openSession();
        Item item = session.get(Item.class, id);
        if (item != null) {
            Transaction tx = session.beginTransaction();
            session.delete(item);
            tx.commit();
            System.out.println("Item deleted.");
        } else {
            System.out.println("Item not found.");
        }
        session.close();
    }

    private static void getItemById(Scanner sc) {
        System.out.print("Enter item ID: ");
        int id = sc.nextInt();

        Session session = HibernateUtil.getSessionFactory().openSession();
        Item item = session.get(Item.class, id);
        if (item != null) {
            System.out.println("Item: " + item.getName() + ", Price: " + item.getPrice());
        } else {
            System.out.println("Item not found.");
        }
        session.close();
    }
}
