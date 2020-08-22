<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="styles.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
    <% String userName = (String) session.getAttribute("userName");
    out.println("<div id=\"name\" style=\"color:red; display:none;\">" + userName + "</div>");
    %>
    
    <canvas id="canvas" width="288" height="512"></canvas>

    <script src="game.js"></script>
</body>
</html>