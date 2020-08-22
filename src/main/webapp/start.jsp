<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isELIgnored="false"%>
<DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flappy bird</title>
<link rel="stylesheet" href="styles.css">
</head>
<body >
<div class="startBg">
    <form action="StartGame" method="post">
    <label for="inputName" id="inputLabel">Input Name</label>
    <input type="text" name="userName" id="inputName">
    <input type="submit" name="startGame" value="Start Game" class="button">
    
    
    </form>

</div>

</body>
</html>
