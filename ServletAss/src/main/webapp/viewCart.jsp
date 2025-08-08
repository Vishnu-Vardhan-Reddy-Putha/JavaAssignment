<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="javax.servlet.http.Cookie" %>
<html>
<head><title>Your Cart</title></head>
<body>
<h2>Your Shopping Cart</h2>
<%
    Cookie[] cookies = request.getCookies();
    boolean hasItems = false;

    if (cookies != null) {
        for (Cookie cookie : cookies) {
            if (!cookie.getName().equals("JSESSIONID")) {
                out.println("<p>Item: " + cookie.getValue() + "</p>");
                hasItems = true;
            }
        }
    }

    if (!hasItems) {
        out.println("<p>Your cart is empty.</p>");
    }
%>
<br><a href="cook.jsp">Back to Shop</a>
</body>
</html>
