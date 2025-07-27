/*
7.A student will not be allowed to sit in exam if his/her attendence is less than 70%.
Take following input from user
Number of classes held
Number of classes attended.
And print
percentage of class attended
Is student is allowed to sit in exam or not.
*/
package assignment;
import java.util.*;
public class Attendance {

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
            System.out.println("The student is NOT allowed to sit in the exam.");
        }

	}

}

/*
 outpt:Enter the number of classes held: 70
Enter the number of classes attended: 60
Percentage of classes attended: 85.71%
The student is allowed to sit in the exam.

 */
