package UserRegistration;



import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/register")
public class UserRegisterForm extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");

        try (PrintWriter out = response.getWriter()) {
            String fullname = request.getParameter("fullname");
            String email = request.getParameter("email");
            String password = request.getParameter("password");
            String birthday = request.getParameter("birthday");
            String gender = request.getParameter("gender");
            String profession = request.getParameter("profession");
            String married = request.getParameter("married");

            out.println("<html><body>");
            out.println("<h2>Registration Details</h2>");
            out.println("<p><strong>Full Name:</strong> " + fullname + "</p>");
            out.println("<p><strong>Email:</strong> " + email + "</p>");
            out.println("<p><strong>Password:</strong> " + password + "</p>");
            out.println("<p><strong>Birthday:</strong> " + birthday + "</p>");
            out.println("<p><strong>Gender:</strong> " + gender + "</p>");
            out.println("<p><strong>Profession:</strong> " + profession + "</p>");
            out.println("<p><strong>Married:</strong> " + (married != null ? married : "No") + "</p>");
            out.println("</body></html>");
        }
    }
}
