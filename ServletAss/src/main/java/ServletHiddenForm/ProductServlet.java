package ServletHiddenForm;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/product")
public class ProductServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public ProductServlet() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.getWriter().append("Served at: ").append(request.getContextPath());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String productData = request.getParameter("product"); // e.g., Pen-10
        String[] parts = productData.split("-");
        String name = parts[0];
        double price = Double.parseDouble(parts[1]);

        request.setAttribute("product", name);
        request.setAttribute("price", price);

        RequestDispatcher dispatcher = request.getRequestDispatcher("quantity.jsp");
        dispatcher.forward(request, response);
    }
}
