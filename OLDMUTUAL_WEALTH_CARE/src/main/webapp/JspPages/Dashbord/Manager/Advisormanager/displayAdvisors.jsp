<%-- <%@page import="com.app.alighthub.model.Advisors"%>
 --%><%@page import="com.app.extremity.model.Advisors"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

  <title>advisors</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<%List<Advisors> advs = (List)request.getAttribute("advs"); %>
<div class="container">

    <table class="table" border="1">
    <thead>
      <tr>
        <th>ADID</th>
        <th>name</th>
        <th>Email</th>
        <th>DOB</th>
        <th>Mobile no</th>
        <th>Address</th>
        <th>Area</th>
        <th>Area pin</th>
        <th>Experince</th>
        <th>User name</th>
        <th>Advisor Manager</th>
      </tr>
    </thead>
    <%for(Advisors ads : advs){ %>
    <tbody>
    
      <tr>
        <td><%out.print(ads.getAdvisorID());%></td>
		<td><%out.print(ads.getAdvisorName());%></td>
		<td><%out.print(ads.getAdvisorEmail());%></td>
		<td><%out.print(ads.getAdvisorDOB());%></td>
		<td><%out.print(ads.getAdvisorContactno());%></td>
		<td><%out.print(ads.getAdvisorAddress());%></td>
		<td><%out.print(ads.getAdvisorArea());%></td>
		<td><%out.print(ads.getAdvisorAddPin());%></td>
		<td><%out.print(ads.getAddvisorExperince());%></td>
		<td><%out.print(ads.getAdvisorUserName());%></td>
		<td><%out.print(ads.getAdvisormanager().getAdvisormanagerID());%></td>      
      </tr>      
      
    </tbody>
    <%} %>
  </table>
</div>

</body>

</html>