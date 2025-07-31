package assignment;

class Employee {
    private String empId;         
    private String name;          
    private int yearOfBirth;      

    public Employee(String empId, String name, int yearOfBirth) {
        this.empId = empId;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    public String getEmpId() {
        return empId;
    }

    public String getName() {
        return name;
    }

    public int getYearOfBirth() {
        return yearOfBirth;
    }

    @Override
    public String toString() {
        return "Employee ID: " + empId + ", Name: " + name + ", Year of Birth: " + yearOfBirth;
    }

   
}

public class Q34 {
	 public static void main(String[] args) {
	        Employee emp1 = new Employee("17-Z-313", "vishnu", 2002);
	        Employee emp2 = new Employee("12-X-312", "vardhan", 2001);

	        System.out.println(emp1);
	        System.out.println(emp2);
	    }

}

/*
Employee ID: 17-Z-313, Name: vishnu, Year of Birth: 2002
Employee ID: 12-X-312, Name: vardhan, Year of Birth: 2001
*/