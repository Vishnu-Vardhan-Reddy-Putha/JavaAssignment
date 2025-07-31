//21.Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.

package assignment;


abstract class Person {
 String name;

 public Person(String name) {
     this.name = name;
 }

 
 abstract void eat();
 abstract void exercise();
}


class Athlete extends Person {
 public Athlete(String name) {
     super(name);
 }

 @Override
 void eat() {
     System.out.println(name + " eats a balanced diet with high protein and vegetables.");
 }

 @Override
 void exercise() {
     System.out.println(name + " exercises every morning with cardio and strength training.");
 }
}

//Subclass LazyPerson
class LazyPerson extends Person {
 public LazyPerson(String name) {
     super(name);
 }

 @Override
 void eat() {
     System.out.println(name + " mostly eats junk food and snacks while watching TV.");
 }

 @Override
 void exercise() {
     System.out.println(name + " avoids exercise and prefers lying on the couch.");
 }
}


public class PersonTest {
 public static void main(String[] args) {
     Person athlete = new Athlete("Alex");
     Person lazyPerson = new LazyPerson("Bob");

     System.out.println("Athlete's Routine:");
     athlete.eat();
     athlete.exercise();

     System.out.println("\nLazy Person's Routine:");
     lazyPerson.eat();
     lazyPerson.exercise();
 }
}


/*
Athlete's Routine:
Alex eats a balanced diet with high protein and vegetables.
Alex exercises every morning with cardio and strength training.

Lazy Person's Routine:
Bob mostly eats junk food and snacks while watching TV.
Bob avoids exercise and prefers lying on the couch.
*/