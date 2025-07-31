//8.Modify the above question to allow student to sit if he/she has medical cause. Ask user if he/she has medical cause or not ( 'Y' or 'N' ) and print accordingly.

package assignment;
import java.util.*;
public class Medical_Cause {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of classes held: ");
        int classesHeld = scanner.nextInt();

        System.out.print("Enter the number of classes attended: ");
        int classesAttended = scanner.nextInt();

        double attendancePercentage = (classesAttended * 100.0) / classesHeld;

        System.out.printf("Percentage of classes attended: %.2f%%\n", attendancePercentage);

        if (attendancePercentage >= 70) {
            System.out.println("The student is allowed to sit in the exam.");
        } else {
            System.out.println("Do you have a medical cause? (Y/N): ");
            char medicalCause = scanner.next().charAt(0);

            if (medicalCause == 'Y' || medicalCause == 'y') {
                System.out.println("The student is allowed to sit in the exam due to medical cause.");
            } else {
                System.out.println("The student is NOT allowed to sit in the exam.");
            }
        }

	}

}

/*
output:Enter the number of classes held: 100
Enter the number of classes attended: 60
Percentage of classes attended: 60.00%
Do you have a medical cause? (Y/N): 
y
The student is allowed to sit in the exam due to medical cause.
*/