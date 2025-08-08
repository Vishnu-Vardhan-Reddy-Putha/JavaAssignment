<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head><title>Select Items</title></head>
<body>
<h2>Select Items to Add to Cart</h2>
<form action="cart" method="post">
    <input type="checkbox" name="item" value="Laptop"> Laptop<br>
    <input type="checkbox" name="item" value="Mouse"> Mouse<br>
    <input type="checkbox" name="item" value="Keyboard"> Keyboard<br><br>
    <input type="submit" value="Add to Cart">
</form>
<br>
<a href="viewCart.jsp">View Cart</a>
</body>
</html>
