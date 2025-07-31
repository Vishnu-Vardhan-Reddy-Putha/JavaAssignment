/*
 17.Create a class called Vehicle. Create subclasses like Truck, Bus, Car etc. Add common methods 
in the base class and specific methods in the corresponding class. Create a class called Road 
and create objects for the Truck, Car, Bus etc and display the appropriate message. 

In the Vehicle class constructor initialize few variables like color, no of 
wheels, model etc. Give appropriate values for these variables from the invoking subclass.  
 */

package assignment;

class Vehicle {
    String color;
    int wheels;
    String model;

    public Vehicle(String color, int wheels, String model) {
        this.color = color;
        this.wheels = wheels;
        this.model = model;
    }

    public void displayDetails() {
        System.out.println("Color: " + color);
        System.out.println("Wheels: " + wheels);
        System.out.println("Model: " + model);
    }
}

class Truck extends Vehicle {
    public Truck(String color, int wheels, String model) {
        super(color, wheels, model);
    }

    public void loadGoods() {
        System.out.println("Truck is loading goods.");
    }
}

class Bus extends Vehicle {
    public Bus(String color, int wheels, String model) {
        super(color, wheels, model);
    }

    public void transportPassengers() {
        System.out.println("Bus is transporting passengers.");
    }
}

class Car extends Vehicle {
    public Car(String color, int wheels, String model) {
        super(color, wheels, model);
    }

    public void playMusic() {
        System.out.println("Car is playing music.");
    }
}

// Only this class should be public since it's the main class
public class Road {
    public static void main(String[] args) {
        Truck truck = new Truck("Red", 6, "Tata LPT 3118");
        Bus bus = new Bus("Blue", 4, "Volvo B9R");
        Car car = new Car("Black", 4, "Honda City");

        System.out.println("Truck Details:");
        truck.displayDetails();
        truck.loadGoods();

        System.out.println("\nBus Details:");
        bus.displayDetails();
        bus.transportPassengers();

        System.out.println("\nCar Details:");
        car.displayDetails();
        car.playMusic();
    }
}



/*
Truck Details:
Color: Red
Wheels: 6
Model: Tata LPT 3118
Truck is loading goods.

Bus Details:
Color: Blue
Wheels: 4
Model: Volvo B9R
Bus is transporting passengers.

Car Details:
Color: Black
Wheels: 4
Model: Honda City
Car is playing music.
*/