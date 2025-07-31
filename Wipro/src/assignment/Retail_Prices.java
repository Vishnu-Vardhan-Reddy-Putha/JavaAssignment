/*
 9.A shopkeeper sells three products whose retail prices are as follows: 
Product 1 - 22.50
              Product 2 - 44.50 
              Product 3 - 9.98
Write an application that reads a series of pairs of numbers as follows:
 a) Product number 
 b) Quantity sold

                The application should use a switch statement to determine the retail price for each product. It 
should calculate and display the total retail value of all products sold. 
 */


package assignment;

import java.util.Scanner;

public class Retail_Prices {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int productNumber;
        int quantity;
        double totalRetailValue = 0.0;

        System.out.println("Enter product number (1-3) and quantity sold.");
        System.out.println("Enter 0 as product number to finish.");

        while (true) {
            System.out.print("Enter product number (1-3, or 0 to exit): ");
            productNumber = scanner.nextInt();

            if (productNumber == 0) {
                break;
            }

            System.out.print("Enter quantity sold: ");
            quantity = scanner.nextInt();

            switch (productNumber) {
                case 1:
                    totalRetailValue += 22.50 * quantity;
                    break;
                case 2:
                    totalRetailValue += 44.50 * quantity;
                    break;
                case 3:
                    totalRetailValue += 9.98 * quantity;
                    break;
                default:
                    System.out.println("Invalid product number. Please enter 1, 2, or 3.");
            }
        }

        System.out.printf("Total retail value of all products sold: ₹%.2f\n", totalRetailValue);
    }
}

/*
output:Enter product number (1-3) and quantity sold.
Enter 0 as product number to finish.
Enter product number (1-3, or 0 to exit): 1
Enter quantity sold: 2
Enter product number (1-3, or 0 to exit): 3
Enter quantity sold: 4
Enter product number (1-3, or 0 to exit): 0
Total retail value of all products sold: ₹84.92
*/