package assignment;

import java.util.Scanner;

class InvalidEmployeeCode extends Exception {
    public InvalidEmployeeCode(String message) {
        super(message);
    }
}

class Employee1 {
    private String empId;
    private String name;
    private int yearOfBirth;

    public Employee1(String empId, String name, int yearOfBirth) {
        this.empId = empId;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    @Override
    public String toString() {
        return "Employee ID: " + empId + ", Name: " + name + ", Year of Birth: " + yearOfBirth;
    }
}
public class Q35 {
    private static void validateEmpId(String empId) throws InvalidEmployeeCode {
        if (!empId.matches("\\d{2}-[FS]-\\d{3}")) {
            throw new InvalidEmployeeCode("Employee Code is Invalid: " + empId);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Employee ID: ");
        String empId = sc.nextLine();

        System.out.print("Enter Employee Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Year of Birth: ");
        int yearOfBirth = sc.nextInt();

        try {
            validateEmpId(empId);
            Employee1 emp = new Employee1(empId, name, yearOfBirth);
            System.out.println("\nEmployee Details:");
            System.out.println(emp);
        } catch (InvalidEmployeeCode e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
