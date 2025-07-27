package assignment;

public class Student {

    
    private static int counter = 1;

    private int rollNo;
    private String studName;
    private int marksInEng;
    private int marksInMaths;
    private int marksInScience;

    
    public Student() {
        this.rollNo = counter++;
    }

    
    public int getRollNo() {
        return rollNo;
    }

    public String getStudName() {
        return studName;
    }

    public int getMarksInEng() {
        return marksInEng;
    }

    public int getMarksInMaths() {
        return marksInMaths;
    }

    public int getMarksInScience() {
        return marksInScience;
    }

    
    public void setStudName(String studName) {
        this.studName = studName;
    }

    public void setMarksInEng(int marksInEng) {
        this.marksInEng = marksInEng;
    }

    public void setMarksInMaths(int marksInMaths) {
        this.marksInMaths = marksInMaths;
    }

    public void setMarksInScience(int marksInScience) {
        this.marksInScience = marksInScience;
    }

    
    public void displayStudentDetails() {
        System.out.println("Roll No: " + rollNo);
        System.out.println("Name: " + studName);
        System.out.println("English Marks: " + marksInEng);
        System.out.println("Maths Marks: " + marksInMaths);
        System.out.println("Science Marks: " + marksInScience);
        System.out.println("---------------------------");
    }

    
    public static void main(String[] args) {
        // Creating first student
        Student s1 = new Student();
        s1.setStudName("Alice");
        s1.setMarksInEng(85);
        s1.setMarksInMaths(90);
        s1.setMarksInScience(88);

        // Creating second student
        Student s2 = new Student();
        s2.setStudName("Bob");
        s2.setMarksInEng(78);
        s2.setMarksInMaths(82);
        s2.setMarksInScience(80);

        // Display students
        s1.displayStudentDetails();
        s2.displayStudentDetails();
    }
}



/*
Roll No: 1
Name: Alice
English Marks: 85
Maths Marks: 90
Science Marks: 88
---------------------------
Roll No: 2
Name: Bob
English Marks: 78
Maths Marks: 82
Science Marks: 80
---------------------------

*/
