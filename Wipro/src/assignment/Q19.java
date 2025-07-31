package assignment;

abstract class Bank {
    String accNo;
    String custName;
    int custGender; // 1 = Male, 2 = Female
    String custJob;
    double curBal;

    Bank(String accNo, String name, int gender, String job, double bal) {
        this.accNo = accNo;
        this.custName = name;
        this.custGender = gender;
        this.custJob = job;
        this.curBal = bal;
    }

    public abstract double calcBalance();

    public String toString() {
        return "Account No: " + accNo + ", Name: " + custName + ", Balance: ₹" + calcBalance();
    }
}

class Saving extends Bank {
    double savRate;

    Saving(String accNo, String name, int gender, String job, double bal, double rate) {
        super(accNo, name, gender, job, bal);
        this.savRate = rate;
    }

    public double calcBalance() {
        return curBal + (savRate * curBal);
    }
}

class Current extends Bank {
    boolean fixedDep;
    double curRate;

    Current(String accNo, String name, int gender, String job, double bal, double rate, boolean fixedDep) {
        super(accNo, name, gender, job, bal);
        this.curRate = rate;
        this.fixedDep = fixedDep;
    }

    public double calcBalance() {
        double bal = curBal + (curRate * curBal);
        if (fixedDep) bal -= 150;
        return bal;
    }
}

public class Q19 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Bank[] customers = {
	            new Saving("S10", "vishnu", 1, "Engineer", 10000, 0.05),
	            new Current("C20", "vardhan", 2, "Doctor", 20000, 0.04, true),
	            new Current("C30", "reddy", 1, "Lawyer", 15000, 0.03, false)
	        };

	        int currentCount = 0;
	        double totalBalance = 0;
	        boolean found = false;

	        for (Bank b : customers) {
	            System.out.println(b);
	            if (b instanceof Current) {
	                currentCount++;
	                totalBalance += b.calcBalance();
	            }

	            if (b.accNo.equals("C201")) {
	                found = true;
	                System.out.println("Customer Found: " + b);
	            }
	        }

	        if (!found) {
	            System.out.println("Customer not found.");
	        }

	        System.out.println("Total current account holders: " + currentCount);
	        System.out.println("Total balance in current accounts: ₹" + totalBalance);
	

	}

}

/*
Account No: S10, Name: vishnu, Balance: ₹10500.0
Account No: C20, Name: vardhan, Balance: ₹20650.0
Account No: C30, Name: reddy, Balance: ₹15450.0
Customer not found.
Total current account holders: 2
Total balance in current accounts: ₹36100.0
*/