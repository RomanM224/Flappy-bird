package com.maistruk.flappybird;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class StartGame extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        if(request.getParameter("startGame") != null) {
        String userName = request.getParameter("userName");
        session.setAttribute("userName", userName);
        request.getRequestDispatcher("/Game.jsp").forward(request, response);
        }else {
            request.getRequestDispatcher("/Game.jsp").forward(request, response);
        }
    }
}
