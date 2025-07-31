/*
 22.Create two interfaces namely Drawable and Fillable. Create class called Line, Circle, Square and
implement following methods through interface.

<I>Drawable ------ drawingColor(), thickness ()
<I>Fillable ---------- fillingColor (), size ()
 */

package assignment;

//Interface Drawable
interface Drawable {
 void drawingColor();
 void thickness();
}


interface Fillable {
 void fillingColor();
 void size();
}


class Line implements Drawable {
 @Override
 public void drawingColor() {
     System.out.println("Line drawing color: Black");
 }

 @Override
 public void thickness() {
     System.out.println("Line thickness: 1px");
 }
}


class Circle implements Drawable, Fillable {
 @Override
 public void drawingColor() {
     System.out.println("Circle drawing color: Red");
 }

 @Override
 public void thickness() {
     System.out.println("Circle thickness: 2px");
 }

 @Override
 public void fillingColor() {
     System.out.println("Circle filling color: Yellow");
 }

 @Override
 public void size() {
     System.out.println("Circle size: Radius = 10");
 }
}

//Class Square implements both Drawable and Fillable
class Square implements Drawable, Fillable {
 @Override
 public void drawingColor() {
     System.out.println("Square drawing color: Blue");
 }

 @Override
 public void thickness() {
     System.out.println("Square thickness: 3px");
 }

 @Override
 public void fillingColor() {
     System.out.println("Square filling color: Green");
 }

 @Override
 public void size() {
     System.out.println("Square size: Side = 15");
 }
}


public class Q22 {
 public static void main(String[] args) {
     System.out.println("Line:");
     Line line = new Line();
     line.drawingColor();
     line.thickness();

     System.out.println("\nCircle:");
     Circle circle = new Circle();
     circle.drawingColor();
     circle.thickness();
     circle.fillingColor();
     circle.size();

     System.out.println("\nSquare:");
     Square square = new Square();
     square.drawingColor();
     square.thickness();
     square.fillingColor();
     square.size();
 }
}



/*
Line:
Line drawing color: Black
Line thickness: 1px

Circle:
Circle drawing color: Red
Circle thickness: 2px
Circle filling color: Yellow
Circle size: Radius = 10

Square:
Square drawing color: Blue
Square thickness: 3px
Square filling color: Green
Square size: Side = 15
*/