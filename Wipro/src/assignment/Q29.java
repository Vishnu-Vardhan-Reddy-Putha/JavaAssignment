package assignment;

import java.util.NoSuchElementException;
import java.util.Scanner;

public class Q29 
{
	public static void main(String[] args) throws NumberFormatException {
		
	
	Scanner sc = new Scanner(System.in);

    try {
        System.out.print("Enter Register Number: ");
        String regNo = sc.nextLine();

        System.out.print("Enter Mobile Number: ");
        String mobile = sc.nextLine();

        if (regNo.length() != 9 || mobile.length() != 10) {
            throw new IllegalArgumentException("Invalid length");
        }

        if (!mobile.matches("\\d+")) {
            throw new NumberFormatException("Mobile number must be digits only");
        }

        if (!regNo.matches("[a-zA-Z0-9]+")) {
            throw new NoSuchElementException("Register number contains invalid characters");
        }

        System.out.println("valid");

    } catch (IllegalArgumentException | NoSuchElementException e) {
        System.out.println("invalid");
    }
}
}

/*
Enter Register Number: AP39LB7621
Enter Mobile Number: 8365856996
invalid

*/