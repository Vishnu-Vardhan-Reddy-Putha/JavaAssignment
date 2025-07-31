package assignment;

	class Worker {
	    String name;
	    double salaryRate;

	    Worker(String name, double rate) {
	        this.name = name;
	        this.salaryRate = rate;
	    }

	    double Pay(int hours) {
	        return 0; // to be overridden
	    }
	}

	class DailyWorker extends Worker {
	    DailyWorker(String name, double rate) {
	        super(name, rate);
	    }

	    double Pay(int days) {
	        return days * salaryRate;
	    }
	}

	class SalariedWorker extends Worker {
	    SalariedWorker(String name, double rate) {
	        super(name, rate);
	    }

	    double Pay(int hours) {
	        return 40 * salaryRate;
	    }
	}

	public class Q13 {
	    public static void main(String[] args) {
	        DailyWorker dw = new DailyWorker("Raj", 500);
	        SalariedWorker sw = new SalariedWorker("Ravi", 300);

	        System.out.println("Daily Worker Pay: ₹" + dw.Pay(5)); // 5 days
	        System.out.println("Salaried Worker Pay: ₹" + sw.Pay(30)); // any hours
	 

		}

	}

/*
	 Daily Worker Pay: ₹2500.0
Salaried Worker Pay: ₹12000.0
*/
