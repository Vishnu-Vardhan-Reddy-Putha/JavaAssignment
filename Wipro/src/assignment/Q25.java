package assignment;

import java.util.Scanner;

public class Q25 {
	
	public static boolean isValid(double a, double b, double c) {
        return (a + b > c) && (a + c > b) && (b + c > a);
    }

    
    public static double perimeter(double a, double b, double c) {
        return a + b + c;
    }

    public static double area(double a, double b, double c) {
        double s = perimeter(a, b, c) / 2.0;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.print("\nEnter side a (or -1 to exit): ");
            double a = sc.nextDouble();

            if (a == -1) {
                System.out.println("Bye~");
                break;
            }

            System.out.print("Enter side b: ");
            double b = sc.nextDouble();

            System.out.print("Enter side c: ");
            double c = sc.nextDouble();

            if (isValid(a, b, c)) {
                double peri = perimeter(a, b, c);
                double ar = area(a, b, c);

                System.out.printf("Perimeter = %.2f\n", peri);
                System.out.printf("Area = %.2f\n", ar);
            } else {
                System.out.println("The input is invalid.");
            }
        }

        sc.close();
    }
}

/*
Enter side a (or -1 to exit): 1
Enter side b: 4
Enter side c: 5
The input is invalid.

Enter side a (or -1 to exit): 5
Enter side b: 6
Enter side c: 7
Perimeter = 18.00
Area = 14.70

Enter side a (or -1 to exit): -7
Enter side b: 5
Enter side c: 6
The input is invalid.

Enter side a (or -1 to exit): -1
Bye~
*/