/*
 27.Create an enum of the six types of paper currency. Loop through the values( ) and print each value. Write a switch statement for the enum.  For each
   case, output a description of that particular currency.

 */

package assignment;

	enum Currency {
	    ONE,
	    FIVE,
	    TEN,
	    TWENTY,
	    FIFTY,
	    HUNDRED
	}

	public class Q27 {
	    public static void main(String[] args) {
	        // Loop through all enum values
	        for (Currency c : Currency.values()) {
	            System.out.println("Currency: " + c);

	            // Switch statement for each currency
	            switch (c) {
	                case ONE:
	                    System.out.println("Description: ₹1 note - Rarely used, mostly in coin form.");
	                    break;
	                case FIVE:
	                    System.out.println("Description: ₹5 note - Common for small transactions.");
	                    break;
	                case TEN:
	                    System.out.println("Description: ₹10 note - Very common in daily use.");
	                    break;
	                case TWENTY:
	                    System.out.println("Description: ₹20 note - Bright yellow note, used frequently.");
	                    break;
	                case FIFTY:
	                    System.out.println("Description: ₹50 note - Blue note used for medium transactions.");
	                    break;
	                case HUNDRED:
	                    System.out.println("Description: ₹100 note - One of the most used denominations.");
	                    break;
	                default:
	                    System.out.println("Unknown currency.");
	            }

	            System.out.println(); 
	        }
	    }
	}

	
/*
 Currency: ONE
Description: ₹1 note - Rarely used, mostly in coin form.

Currency: FIVE
Description: ₹5 note - Common for small transactions.

Currency: TEN
Description: ₹10 note - Very common in daily use.

Currency: TWENTY
Description: ₹20 note - Bright yellow note, used frequently.

Currency: FIFTY
Description: ₹50 note - Blue note used for medium transactions.

Currency: HUNDRED
Description: ₹100 note - One of the most used denominations.


 */
	