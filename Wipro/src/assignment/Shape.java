/* 
 * 14.Create a class called shape with the following methods
1. area
2. perimeter

                    Overload the area and perimeter method to calculate for both square and rectangle.
                    Create a main class and invoke the area method to calculate the area of the square and 
rectangle. Also invoke the perimeter method to calculate the perimeter of the square 
and rectangle.
 */

package assignment;
public class Shape {

    // Area of square
    public double area(double side) {
        return side * side;
    }

    // Area of rectangle
    public double area(double length, double breadth) {
        return length * breadth;
    }

    // Perimeter of square
    public double perimeter(double side) {
        return 4 * side;
    }

    // Perimeter of rectangle
    public double perimeter(double length, double breadth) {
        return 2 * (length + breadth);
    }
}
