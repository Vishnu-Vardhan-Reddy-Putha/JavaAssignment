/*
 11. Create a class called Calculator which has 4 different methods add, diff, mul and div which 
accepts two numbers as parameters. Create an object to access these methods and invoke 
these methods with two numbers and display the result in the corresponding methods. 

 */

package assignment;
public class Calculator {

    
    public void add(int a, int b) {
        int result = a + b;
        System.out.println("Addition: " + result);
    }

    
    public void diff(int a, int b) {
        int result = a - b;
        System.out.println("Difference: " + result);
    }

    
    public void mul(int a, int b) {
        int result = a * b;
        System.out.println("Multiplication: " + result);
    }

    
    public void div(int a, int b) {
        if (b != 0) {
            double result = (double) a / b;
            System.out.println("Division: " + result);
        } else {
            System.out.println("Error: Division by zero is not allowed.");
        }
    }

    
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        int num1 = 20;
        int num2 = 5;

        calc.add(num1, num2);
        calc.diff(num1, num2);
        calc.mul(num1, num2);
        calc.div(num1, num2);
    }
}

/* 
output:Addition: 25
Difference: 15
Multiplication: 100
Division: 4.0
*/