/*
 26.Given integer array, remove the duplicate elements and print sum of even 
numbers in the array.
input 1={2,3,54,1,6,7,7}
 */

package assignment;
import java.util.*;
public class Q26 {

	
	    public static void main(String[] args)
	    {
	        int[] input = {2, 3, 54, 1, 6, 7, 7};

	        
	        Set<Integer> uniqueSet = new LinkedHashSet<>();
	        for (int num : input) {
	            uniqueSet.add(num);
	        }
	        int evenSum = 0;
	        System.out.print("Unique elements: ");
	        for (int num : uniqueSet) {
	            System.out.print(num + " ");
	            if (num % 2 == 0) {
	                evenSum += num;
	            }
	        }

	        System.out.println("\nSum of even numbers: " + evenSum);
	    }

}



/*
Unique elements: 2 3 54 1 6 7 
Sum of even numbers: 62
*/