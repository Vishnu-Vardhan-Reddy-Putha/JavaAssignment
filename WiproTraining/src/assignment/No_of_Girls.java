//3.The total number of students in a class are 90 out of which 45 are boys. If 50% of the total students secured grade 'A' out of which 20 are boys, then write a program to calculate the total number of girls getting grade 'A'.

package assignment;

public class No_of_Girls {

	public static void main(String[] args) {
		int totalStudents = 90;
        int totalBoys = 45;

        int gradeAStudents = totalStudents * 50 / 100; 
        int gradeABoys = 20;

        int gradeAGirls = gradeAStudents - gradeABoys;

        System.out.println("Number of girls who got grade 'A': " + gradeAGirls);
		
	}

}

//output:Number of girls who got grade 'A': 25