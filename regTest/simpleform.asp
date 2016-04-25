<%@ language="javascript"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
</head>
<body>
<%
Response.Write(Request.QueryString("name"))
Response.Write(Request.QueryString("telephone"))
Response.Write(Request.QueryString("address"))
%>
</body>
</html>
