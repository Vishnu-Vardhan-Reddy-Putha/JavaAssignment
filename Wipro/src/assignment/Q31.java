package assignment;

public class Q31 
{
	public static void main(String[] args) {
		try
		{
			//System.out.println("Divide:: "+(12/6));

			System.out.println("Divide:: "+(12/0));
			int a[]=new int[5];
			a[1]=57050;
//			a[7]=57050;
		}
		
		
		catch(ArrayIndexOutOfBoundsException e)
		{
			System.out.println("Check the array index!");
			e.printStackTrace();
		}
	
		catch(Throwable e)
		{
			System.out.println("Division By Zero issue!!!");
			System.out.println("Exception object:: "+e);//e.toString()
			System.out.println("Exception error message:: "+e.getMessage());
		}
		finally
		{
			System.out.println("Finally Block:: DB Connection Close(),IO File Close(),signout()");
		}
		System.out.println("Program continues normally...!!!");	

	}


}

/*
Division By Zero issue!!!
Exception object:: java.lang.ArithmeticException: / by zero
Exception error message:: / by zero
Finally Block:: DB Connection Close(),IO File Close(),signout()
Program continues normally...!!!
*/