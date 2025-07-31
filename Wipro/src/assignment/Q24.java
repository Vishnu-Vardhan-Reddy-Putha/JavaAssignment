/*
 24.Five Bikers Compete in a race such that they drive at a constant speed which may or may
not be the same as the other. To qualify the race, the speed of a racer must be more than the
average speed of all 5 racers. Take as input the speed of each racer and print back the speed
of qualifying racers. 
 */

package assignment;
import java.util.Scanner;
public class Q24 {
 public static void main(String[] args) {
	        Scanner sc = new Scanner(System.in);
	        double[] speeds = new double[5];
	        double sum = 0;

	        
	        for (int i = 0; i < 5; i++) {
	            System.out.print("Enter speed of racer " + (i + 1) + ": ");
	            speeds[i] = sc.nextDouble();
	            sum += speeds[i];
	        }

	       
	        double average = sum / 5;
	        System.out.println("\nAverage speed: " + average);

	        
	        System.out.println("Qualifying racers (speed > average):");
	        boolean anyQualified = false;
	        for (int i = 0; i < 5; i++) {
	            if (speeds[i] > average) {
	                System.out.println("Racer " + (i + 1) + " with speed: " + speeds[i]);
	                anyQualified = true;
	            }
	        }

	        if (!anyQualified) {
	            System.out.println("No racers qualified.");
	        }

	        sc.close();
	    }
	}


/*
 Enter speed of racer 1: 40
Enter speed of racer 2: 35
Enter speed of racer 3: 50
Enter speed of racer 4: 30
Enter speed of racer 5: 45

Average speed: 40.0
Qualifying racers (speed > average):
Racer 3 with speed: 50.0
Racer 5 with speed: 45.0
*/
