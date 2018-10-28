<%@page import="com.app.extremity.model.User"%>
<%-- <%@page import="com.app.alighthub.model.User"%>
 --%><%@page import="java.util.List"%>
<%-- <%@page import="com.app.alighthub.model.Advisors"%>
 --%><%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>OLD MUTUAL WEALTH CARE</title>
<meta name="description" content="Sufee Admin - HTML5 Admin Template">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="apple-touch-icon" href="apple-icon.png">
<link rel="shortcut icon" href="favicon.ico">

<link rel="stylesheet"
	href="${pageContext.request.contextPath}/Resources/DashbordResources/css/normalize.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/Resources/DashbordResources/css/bootstrap.min.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/Resources/DashbordResources/css/font-awesome.min.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/Resources/DashbordResources/css/themify-icons.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/Resources/DashbordResources/css/flag-icon.min.css">

<link rel="stylesheet"
	href="${pageContext.request.contextPath}/Resources/DashbordResources/css/addnewAdvisor.css">


<link rel="stylesheet"
	href="${pageContext.request.contextPath}/Resources/DashbordResources/css/cs-skin-elastic.css">
<!--     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 -->
<!-- <link rel="stylesheet" href="assets/css/bootstrap-select.less"> -->
<!--  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 -->
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/Resources/DashbordResources/scss/style.css">
<link
	href="${pageContext.request.contextPath}/Resources/DashbordResources/css/lib/vector-map/jqvmap.min.css"
	rel="stylesheet">

<link
	href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800'
	rel='stylesheet' type='text/css'>

<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script> -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>

	<!-- Left Panel -->
	<aside id="left-panel" class="left-panel">
		<nav class="navbar navbar-expand-sm navbar-default">

			<div class="navbar-header">
				<button class="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#main-menu" aria-controls="main-menu"
					aria-expanded="false" aria-label="Toggle navigation">
					<i class="fa fa-bars"></i>
				</button>
				<a href="advisormanagerHome.jsp" id="branding"> <img
					src="${pageContext.request.contextPath}/Resources/WebSite/images/logo.png"
					alt="Company Name" class="logo">
					<h1 class="site-title">WEALTH CARE</h1> <small class="description">Insurance</small></a>
				<a class="navbar-brand hidden" href="advisormanagerHome.jsp"><img
					src="${pageContext.request.contextPath}/Resources/DashbordResources/images/logo2.png"
					alt="Logo"></a>
			</div>

			<div id="main-menu" class="main-menu collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="index.html"> <i
							class="menu-icon fa fa-dashboard"></i>Dashboard
					</a> <a href="click"> <i class="menu-icon fa fa-dashboard"></i>click
							here
					</a></li>
					<h3 class="menu-title">UI elements</h3>
					<!-- /.menu-title -->

					<li class="menu-item-has-children dropdown"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false"> <i
							class="menu-icon fa fa-table"></i>Users list
					</a>
						<ul class="sub-menu children dropdown-menu">
							<li><i class="glyphicon glyphicon-user"
								style="color: white;"></i><a href="userdisplay">Display
									Users</a></li>
							<li><i class="glyphicon glyphicon-user"
								style="color: white;"></i><a href="assignAdvisor">Assign
									Advisor</a></li>

						</ul></li>
					<li class="menu-item-has-children dropdown"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false"> <i
							class="menu-icon fa fa-table"></i>Advisors list
					</a>
						<ul class="sub-menu children dropdown-menu">
							<li><i class="glyphicon glyphicon-user"
								style="color: white;"></i><a href="addAdvisor">Add advisor</a></li>
							<li><i class="glyphicon glyphicon-user"
								style="color: white;"></i><a href="displayAdvisor">Display
									Advisor</a></li>

						</ul></li>


					<h3 class="menu-title">Icons</h3>
					<!-- /.menu-title -->

					<li class="menu-item-has-children dropdown"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false"> <i
							class="menu-icon fa fa-tasks"></i>Icons
					</a>
						<ul class="sub-menu children dropdown-menu">
							<li><i class="menu-icon fa fa-fort-awesome"></i><a
								href="font-fontawesome.html">Font Awesome</a></li>
							<li><i class="menu-icon ti-themify-logo"></i><a
								href="font-themify.html">Themefy Icons</a></li>
						</ul></li>
					<li><a href="widgets.html"> <i class="menu-icon ti-email"></i>Widgets
					</a></li>
					<li class="menu-item-has-children dropdown"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false"> <i
							class="menu-icon fa fa-bar-chart"></i>Charts
					</a>
						<ul class="sub-menu children dropdown-menu">
							<li><i class="menu-icon fa fa-line-chart"></i><a
								href="charts-chartjs.html">Chart JS</a></li>
							<li><i class="menu-icon fa fa-area-chart"></i><a
								href="charts-flot.html">Flot Chart</a></li>
							<li><i class="menu-icon fa fa-pie-chart"></i><a
								href="charts-peity.html">Peity Chart</a></li>
						</ul></li>

					<li class="menu-item-has-children dropdown"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false"> <i
							class="menu-icon fa fa-area-chart"></i>Maps
					</a>
						<ul class="sub-menu children dropdown-menu">
							<li><i class="menu-icon fa fa-map-o"></i><a
								href="maps-gmap.html">Google Maps</a></li>
							<li><i class="menu-icon fa fa-street-view"></i><a
								href="maps-vector.html">Vector Maps</a></li>
						</ul></li>
					<h3 class="menu-title">Extras</h3>
					<!-- /.menu-title -->
					<li class="menu-item-has-children dropdown"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false"> <i
							class="menu-icon fa fa-glass"></i>Pages
					</a>
						<ul class="sub-menu children dropdown-menu">
							<li><i class="menu-icon fa fa-sign-in"></i><a
								href="page-login.html">Login</a></li>
							<li><i class="menu-icon fa fa-sign-in"></i><a
								href="page-register.html">Register</a></li>
							<li><i class="menu-icon fa fa-paper-plane"></i><a
								href="pages-forget.html">Forget Pass</a></li>
						</ul></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</nav>
	</aside>
	<!-- /#left-panel -->

	<!-- Left Panel -->

<script>

	
	
	 function asgn(adid,uid) {
		alert("advisor--->"+adid);
		
		alert("UID--->"+uid);
		 var request = new XMLHttpRequest();
		 var url = "adud?advisorID="+adid+"&userID="+uid;

			 alert(url)
			request.open("GET", url, true);

			 request.send();
			 request.onreadystatechange = function() {
				alert("in state");
				if (this.readyState == 4 && this.status == 200) {
					 
					location.reload(); 
				 }
			} 
	}
 
 
 	
			function assign(uid,pin) {
				alert("assign function")

				//document.getElementById('find').style.display = "block";
				 var req = new XMLHttpRequest();
				/* var pinid = document.getElementById("pin").value;
				var uid = document.getElementById("uid").value; */
				alert(uid)
				alert(pin)
				var url = "assign?advisorAddPin=" + pin;
				//var url="assign";
				alert(url)
				req.open("GET", url, true);

				req.send();
				req.onreadystatechange = function() {
/* 					alert("in state");
 */					if (this.readyState == 4 && this.status == 200) {
						var advisorL = JSON.parse(req.responseText);
						alert(req.responseText)
						alert(advisorL)
						 
						 var etable =document.getElementById("t1");
						 var row= etable.insertRow();
						 //row1
						 	var cell11=row.insertCell();
						 	cell11.innerHTML="ID";
						 	
						 	var cell12=row.insertCell();
						 	cell12.innerHTML="Name";
						 	
						 		var cell13=row.insertCell();
						 	cell13.innerHTML="Email";
						 	
						  	var cell14=row.insertCell();
						 	cell14.innerHTML="contact";
						 	
						 	var cell15=row.insertCell();
						 	cell15.innerHTML="Address";
						 	
						 	var cell16=row.insertCell();
						 	cell16.innerHTML="DOB";
						 	
						 	var cell17=row.insertCell();
						 	cell17.innerHTML="PIN no";
						 	
						 	var cell18=row.insertCell();
						 	cell18.innerHTML="Experince";
						 	
						 	 var cell19=row.insertCell();
						 		cell19.innerHTML="advisorArea";
						 		
						 		var cell10=row.insertCell();
							 	cell10.innerHTML="Assign"
 						 		alert("finish");

			
			
			  for (var adv in advisorL) 
			  {
				 var row1=etable.insertRow();
					//alert("=====5===="+row1)
					
					
					var tabCell=row1.insertCell();
					tabCell.innerHTML=advisorL[adv].advisorID;
					
					var tabCell2=row1.insertCell();
					tabCell2.innerHTML=advisorL[adv].advisorName;

					var tabCell3=row1.insertCell();
					tabCell3.innerHTML=advisorL[adv].advisorEmail;
					var tabCell4=row1.insertCell();
					tabCell4.innerHTML=advisorL[adv].advisorContactno;
					
					var tabCell5=row1.insertCell();
					tabCell5.innerHTML=advisorL[adv].advisorAddress;
					
					var tabCell6=row1.insertCell();
					tabCell6.innerHTML=advisorL[adv].advisorDOB;
					
					var tabCell7=row1.insertCell();
					tabCell7.innerHTML=advisorL[adv].advisorAddPin;

					var tabCell8=row1.insertCell();
					tabCell8.innerHTML=advisorL[adv].addvisorExperince;
					
					var tabCell9=row1.insertCell();
					tabCell9.innerHTML=advisorL[adv].advisorArea;
					
					 var tabCell10=row1.insertCell();
 					tabCell10.innerHTML="<input type = 'button' value='assign' id = '" + advisorL[adv].advisorID + "' onclick='asgn(this.id," +uid+ ")'/>";
  					
					   
					
				} 

			}
			
			}
				
		}		
		
							


		</script>

	<!-- Right Panel -->
	<div id="right-panel">

<%-- 		<%@ include file="advisormanagerHeader.jsp"%>
 --%>	
		<div class="container">
			<%
				List<User> user = (List) request.getAttribute("user");
			%>

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
						<th>User name</th>
						<th>Assigned Advisor</th>
					 	<th>Assign Advisor</th> 
						</tr>
				</thead>
				<%
					for (User us : user) {
				%>
				<tbody>

										

						<td>
							<%
								out.print(us.getUserID());
							%>
						</td>

						<td>
							<%
								out.print(us.getUserName());
							%>
						</td>
						<td>
							<%
								out.print(us.getUserEmail());
							%>
						</td>
						<td>
							<%
								out.print(us.getUserDOB());
							%>
						</td>
						<td>
							<%
								out.print(us.getUsercontact());
							%>
						</td>
						<td>
							<%
								out.print(us.getUserAddress());
							%>
						</td>
						<td>
							<%
								out.print(us.getUserArea());
							%>
						</td>
						<td>
							<%
								out.print(us.getUserPin());
							%>
						</td>
						<td>
							<%
								out.print(us.getUserName());
							%>
						</td>
						<td>
							<%out.print(us.getAdvisor().getAdvisorID());%>
						</td>

						<td>
 						<input type="button" value="assign" onclick="assign('<%=us.getUserID()%>','<%=us.getUserPin()%>')">
 	
						</td>

					</tr>

				</tbody>
				<%
					}
				%>
			</table>
		</div>
		
				<!--class="container" name="advisorAddPin"   -->
		<div class="container">
			Enter Pincode <input type="text" name="advisorAddPin" id="pin">
			<input type="submit" value="find" onclick="assign()">
		</div>


		
		<div>
			<table id="t1" class="table table-bordered">
			</table>
		</div>
		



	</div>

	<!-- /#right-panel -->

	<!-- Right Panel -->

	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/vendor/jquery-2.1.4.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/plugins.js"></script>
	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/main.js"></script>


	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/lib/chart-js/Chart.bundle.js"></script>
	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/dashboard.js"></script>
	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/widgets.js"></script>
	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/lib/vector-map/jquery.vmap.js"></script>
	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/lib/vector-map/jquery.vmap.min.js"></script>
	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/lib/vector-map/jquery.vmap.sampledata.js"></script>
	<script
		src="${pageContext.request.contextPath}/Resources/DashbordResources/js/lib/vector-map/country/jquery.vmap.world.js"></script>
	<script>
		(function($) {
			"use strict";

			jQuery('#vmap').vectorMap({
				map : 'world_en',
				backgroundColor : null,
				color : '#ffffff',
				hoverOpacity : 0.7,
				selectedColor : '#1de9b6',
				enableZoom : true,
				showTooltip : true,
				values : sample_data,
				scaleColors : [ '#1de9b6', '#03a9f5' ],
				normalizeFunction : 'polynomial'
			});
		})(jQuery);
	</script>
</body>
</html>