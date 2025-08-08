package com.servlet;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.*;

public class RegisterServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Handles GET requests (optional here)
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.sendRedirect("studentForm.jsp"); // or show a message
    }

    // Handles POST requests (form submission)
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String course = request.getParameter("course");

        request.setAttribute("name", name);
        request.setAttribute("email", email);
        request.setAttribute("course", course);

        RequestDispatcher rd = request.getRequestDispatcher("register.jsp");
        rd.forward(request, response);
    }
}
