<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head><title>Select Product</title></head>
<body>
    <h2>Select a Product</h2>
    <form action="product" method="post">
        <select name="product">
            <option value="Pen-10">Pen</option>
            <option value="Book-50">Book</option>
            <option value="Pencil-5">Pencil</option>
        </select>
        <input type="submit" value="Next">
    </form>
</body>
</html>