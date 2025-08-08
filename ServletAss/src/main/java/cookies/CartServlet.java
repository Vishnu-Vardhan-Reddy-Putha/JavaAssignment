package cookies;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet("/cart")
public class CartServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Handles GET requests (like when someone types URL in browser)
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.sendRedirect("cook.jsp");  // redirect to your form page
    }

    // Handles POST requests (form submission)
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String[] selectedItems = request.getParameterValues("item");
        if (selectedItems != null) {
            for (String item : selectedItems) {
                Cookie cookie = new Cookie(item, item);
                cookie.setMaxAge(60 * 60); // 1 hour
                response.addCookie(cookie);
            }
        }

        response.setContentType("text/html");
        response.getWriter().println("<h3>Items added to cart!</h3>");
        response.getWriter().println("<a href='cook.jsp'>Add More</a><br>");
        response.getWriter().println("<a href='viewCart.jsp'>View Cart</a>");
    }
}
