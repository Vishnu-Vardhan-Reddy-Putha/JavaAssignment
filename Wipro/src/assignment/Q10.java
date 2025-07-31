package assignment;

public class Q10 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 int eggs = 1342; // or use Integer.parseInt(args[0]) for command line input

	        int gross = eggs / 144;
	        int remainder = eggs % 144;
	        int dozen = remainder / 12;
	        int leftover = remainder % 12;

	        System.out.println("Your number of eggs is " + gross + " gross, " + dozen + " dozen, and " + leftover);

	}

}

/*
Your number of eggs is 9 gross, 3 dozen, and 10
*/