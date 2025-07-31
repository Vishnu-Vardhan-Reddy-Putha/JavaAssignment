//1.Write a program to add 8 to the number 2345 and then divide it by 3. Now, the modulus of the quotient is taken with 5 and then multiply the resultant value by 5. Display the final result.
package assignment;

public class Arithmetic {
	public static void main(String[] args) {
		
		int n=2345;
		n=n+8;
		n=n/3;
		n=n%5;
		n=n*5;
		System.out.println("Final result:"+n);		

	}

}
//output:Final result:20