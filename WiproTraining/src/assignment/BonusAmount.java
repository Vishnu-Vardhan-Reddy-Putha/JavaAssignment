/*5.A company decided to give bonus of 10% to employee if his/her year of service is more than 6 years.
Ask user for their salary and year of service and print the net bonus amount.*/

package assignment;
import java.util.*;
public class BonusAmount {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your salary: ");
        double salary = scanner.nextDouble();

        System.out.print("Enter your years of service: ");
        int years = scanner.nextInt();

        if (years > 6) {
            double bonus = salary * 0.10; // 10% bonus
            System.out.println("You are eligible for a bonus of:" + bonus);
        } else {
            System.out.println("You are not eligible for a bonus.");
        }
	}

}

/*
 output:Enter your salary: 50000
Enter your years of service: 7
You are eligible for a bonus of:5000.0
*/