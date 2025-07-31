/* 
 14.Create a class called shape with the following methods
1. area
2. perimeter

                    Overload the area and perimeter method to calculate for both square and rectangle.
                    Create a main class and invoke the area method to calculate the area of the square and 
rectangle. Also invoke the perimeter method to calculate the perimeter of the square 
and rectangle.
 */

package assignment;

public class ShapeTest {
    public static void main(String[] args) {
        Shape shape = new Shape();

        // Square: side = 5
        double squareArea = shape.area(5);
        double squarePerimeter = shape.perimeter(5);

        // Rectangle: length = 8, breadth = 4
        double rectangleArea = shape.area(8, 4);
        double rectanglePerimeter = shape.perimeter(8, 4);

        System.out.println("Square ");
        System.out.println("Area: " + squareArea);
        System.out.println("Perimeter: " + squarePerimeter);

        System.out.println("\nRectangle ");
        System.out.println("Area: " + rectangleArea);
        System.out.println("Perimeter: " + rectanglePerimeter);
    }
}

/*  
Square 
Area: 25.0
Perimeter: 20.0

Rectangle 
Area: 32.0
Perimeter: 24.0
*/