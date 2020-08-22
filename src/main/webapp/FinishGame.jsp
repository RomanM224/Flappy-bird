<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="JavaS.js"></script>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="startBg">
	<%HttpSession session1 = request.getSession();
	String score =(String) session1.getAttribute("score");
	
	%>
	<span id="score">Your score: <%out.print(score); %></span>
	
	
	
	<form action="StartGame" method="post">
	<input type="submit" value="Start again" class="finishButton">
	</form>
	
		<form action="StartGame" method="post">
	<input type="submit" value="Show Records" class="finishButton">
	</form>
	<button id="btn" class="finishButton">Main menu</button>
	<script type="text/javascript">
	document.getElementById("btn").onclick = move;

	function move(){
	    window.location.href = "/flabybird/main.jsp";
	}
	</script>
</div>
</body>
</html>