package assignment;

public class Q28 
{
	@FunctionalInterface
	 interface SampleWithLambda {
		boolean sam1(int a);

	}
	public static SampleWithLambda isOdd() {
        return (int a) -> a % 2 != 0;
    }
	
    public static SampleWithLambda isPrime() {
        return (int a) -> {
            if (a <= 1) return false;
            for (int i = 2; i <= Math.sqrt(a); i++) {
                if (a % i == 0)
                    return false;
            }
            return true;
        };
    }

    public static SampleWithLambda isPalindrome() {
        return (int a) -> {
            String str = Integer.toString(a);
            String reversed = new StringBuilder(str).reverse().toString();
            return str.equals(reversed);
        };
    }

	public static void main(String[] args) 
	{
		SampleWithLambda op1 = isOdd();
	        SampleWithLambda op2 = isPrime();
	        SampleWithLambda op3 = isPalindrome();

	        int num1 = 11, num2 = 18, num3 = 121;

	        System.out.println("Is " + num1 + " odd? " + op1.sam1(num1));
	        System.out.println("Is " + num1 + " prime? " + op2.sam1(num1));
	        System.out.println("Is " + num3 + " palindrome? " + op3.sam1(num3));
	        System.out.println("Is " + num2 + " palindrome? " + op3.sam1(num2));
		


	}
}
