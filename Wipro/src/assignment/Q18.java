package assignment;


class Animal {
    String name;
    String color;
    int age;
    double weight;

    public Animal(String name, String color, int age, double weight) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
    }

    public boolean isVegetarian() { return false; }
    public boolean canClimb() { return false; }
    public String sound() { return "Unknown sound"; }

    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Color: " + color);
        System.out.println("Age: " + age + " years");
        System.out.println("Weight: " + weight + " kg");
        System.out.println("Vegetarian? " + isVegetarian());
        System.out.println("Can Climb? " + canClimb());
        System.out.println("Sound: " + sound());
        System.out.println("------------------------------");
    }
}

class Lion extends Animal {
    public Lion() { super("Lion", "Golden", 7, 190.5); }
    public String sound() { return "Roars"; }
}

class Tiger extends Animal {
    public Tiger() { super("Tiger", "Orange & Black", 6, 220.3); }
    public String sound() { return "Growls"; }
}

class Deer extends Animal {
    public Deer() { super("Deer", "Brown", 4, 85.0); }
    public boolean isVegetarian() { return true; }
    public String sound() { return "Bleats"; }
}

class Monkey extends Animal {
    public Monkey() { super("Monkey", "Grey", 3, 35.2); }
    public boolean isVegetarian() { return true; }
    public boolean canClimb() { return true; }
    public String sound() { return "Chatters"; }
}

class Elephant extends Animal {
    public Elephant() { super("Elephant", "Grey", 12, 500.0); }
    public boolean isVegetarian() { return true; }
    public String sound() { return "Trumpets"; }
}

class Giraffe extends Animal {
    public Giraffe() { super("Giraffe", "Yellow", 10, 800.0); }
    public boolean isVegetarian() { return true; }
    public String sound() { return "Hums"; }
}

public class Q18 {
    public static void main(String[] args) {
        Animal[] zooAnimals = {
            new Lion(),
            new Tiger(),
            new Deer(),
            new Monkey(),
            new Elephant(),
            new Giraffe()
        };

        System.out.println("🐾 Welcome to Vandalur Zoo!");
        System.out.println("==============================");
        for (Animal a : zooAnimals) {
            a.display();
        }
    }
}

/*
Welcome to Vandalur Zoo!
==============================
Name: Lion
Color: Golden
Age: 7 years
Weight: 190.5 kg
Vegetarian? false
Can Climb? false
Sound: Roars
------------------------------
Name: Tiger
Color: Orange & Black
Age: 6 years
Weight: 220.3 kg
Vegetarian? false
Can Climb? false
Sound: Growls
------------------------------
Name: Deer
Color: Brown
Age: 4 years
Weight: 85.0 kg
Vegetarian? true
Can Climb? false
Sound: Bleats
------------------------------
Name: Monkey
Color: Grey
Age: 3 years
Weight: 35.2 kg
Vegetarian? true
Can Climb? true
Sound: Chatters
------------------------------
Name: Elephant
Color: Grey
Age: 12 years
Weight: 500.0 kg
Vegetarian? true
Can Climb? false
Sound: Trumpets
------------------------------
Name: Giraffe
Color: Yellow
Age: 10 years
Weight: 800.0 kg
Vegetarian? true
Can Climb? false
Sound: Hums
------------------------------
*/