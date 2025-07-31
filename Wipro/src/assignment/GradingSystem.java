/*
6.A school has following rules for grading system:
a. Below 25 - F
b. 25 to 45 - E
c. 45 to 50 - D
d. 50 to 60 - C
e. 60 to 80 - B
f. Above 80 - A
Ask user to enter marks and print the corresponding grade.
*/
package assignment;
import java.util.*;
public class GradingSystem {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your marks: ");
        int marks=scanner.nextInt();
        if(marks<25)
        {
        	System.out.println(" F Grade");
        }
        else if(marks>=25 && marks<=45)
        {
        	System.out.println("E grade ");
        }
        else if(marks>=45 && marks<=50)
        {
        	System.out.println("D Grade ");
        }
        else if(marks>=50 && marks<=60)
        {
        	System.out.println("C Grade ");
        }
        else if(marks>=60 && marks<=80)
        {
        	System.out.println(" B Grade");
        }
        else if(marks>80 && marks<=100)
        {
        	System.out.println("A Grade ");
        }


	}

}

/*
output:Enter your marks: 90
A Grade 
*/
