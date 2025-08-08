<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head><title>Enter Quantity</title></head>
<body>
    <h2>Enter Quantity for ${product}</h2>
    <form action="order" method="post">
        <input type="hidden" name="product" value="${product}">
        <input type="hidden" name="price" value="${price}">
        Quantity: <input type="number" name="quantity" required>
        <input type="submit" value="Generate Bill">
    </form>
</body>
</html>