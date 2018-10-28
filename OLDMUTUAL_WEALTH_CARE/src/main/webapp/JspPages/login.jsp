<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>WEALTH CARE INSURANCE</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
<link rel="icon" type="image/png"
	href="${pageContext.request.contextPath}/Resources/LoginResources/images/icons/favicon.ico" />
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/Resources/LoginResources/vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/Resources/LoginResources/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/Resources/LoginResources/vendor/animate/animate.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/Resources/LoginResources/vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/Resources/LoginResources/vendor/select2/select2.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/Resources/LoginResources/css/util.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/Resources/LoginResources/css/main.css">
<!--===============================================================================================-->

</head>
<body>
	<script type="text/javascript">

  function loginA() {
	   document.login.action="login";
	
	document.login.submit();  
 	/* alert("in loginA()")
	 var req = new XMLHttpRequest();
	
	var id=document.getElementById("id").value;
	alert(id)
	
	var pass=document.getElementById("pass").value;
	alert(pass)
	var url = "http://localhost:8095/login?ID=" + id +"&password="+pass;
	alert(url)
	req.open("GET", url, true);

	req.send();
	req.onreadystatechange = function() {
 					alert("in state----1");
 					alert(req.responseText)
					if (this.readyState == 4 && this.status == 200) {
						alert("in if condition")
 						//var redirpage=JSON.parse(req.responseText);
 						alert(req.responseText)
						alert("after if con")
						if(req.responseText=="advisormanager"){
							alert("in if Condition of advisor manager")
 							//advdash();
							var req = new XMLHttpRequest();
							
							  var url1="advisor";
									alert(url)
									req.open("GET", url1, false);
									alert(url)
									req.send(); 
									
						}	
 						if(req.responseText=="clientmanager")
 						{
										alert("in if condition of client manager")
				 						alert(req.responseText)
										alert("after if con of client manager")
										
											 document.myform.action="clientdashboard";
												document.myform.submit(); 

						}


					}
						
						
					
		}
 */ }
	

 
  function advdash() {
	 alert("------------in advdash alert---------------")
 /*  document.myform.action="advisor";
							document.myform.submit();   */
		var req = new XMLHttpRequest();
		
  var url1="advisor";
		alert(url)
		req.open("GET", url1, false);
		alert(url)
		req.send(); 
}
 
 </script>
	<form name="myform"></form>

	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img
						src="${pageContext.request.contextPath}/Resources/LoginResources/images/img-01.png"
						alt="IMG">
				</div>
				<!-- ---Demo login --------------------------------------------------------------------------------------->
				<form class="login100-form validate-form" name="login">
					<span class="login100-form-title"> Member Login </span>

					<div class="wrap-input100 validate-input"
						data-validate="Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" id="id" name="ID"
							placeholder="UserName"> <span class="focus-input100"></span>
						<span class="symbol-input100"> <i class="fa fa-envelope"
							aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input"
						data-validate="Password is required">
						<input class="input100" type="password" id="pass" name="password"
							placeholder="Password"> <span class="focus-input100"></span>
						<span class="symbol-input100"> <i class="fa fa-lock"
							aria-hidden="true"></i>
						</span>
					</div>


					<!--  <div>
						<button type="button" value="Login" class="btn btn-primary"  onclick="loginA()">
						Login
						</button>
					</div>  -->
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" onclick="loginA()">
							<!-- -onclick="loginA()" -->
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1"> Forgot </span> <a class="txt2" href="#">
							Username / Password? </a>
					</div>
					<div class="text-center p-t-136">
						<a class="txt2" href="registerPage"> Create your Account <i
							class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>



				<!-- ---Demo login --------------------------------------------------------------------------------------->


				<!-- <form class="login100-form validate-form" name="login">
					<span class="login100-form-title">
						Member Login
					</span>
					

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="advisormanagerUserName" placeholder="UserName">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="advisormanagerPassword" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					 
					 <div>
						<button type="button" value="Login" class="btn btn-primary"  onclick="loginA()">
						Login
						</button>
					</div> 
					 <div class="container-login100-form-btn">
						<button class="login100-form-btn"  onclick="loginA()">
							Login
						</button>
					</div> 

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>
					<div class="text-center p-t-136">
						<a class="txt2" href="registerPage">
							Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
 -->
				<!-- <form action="/">
				<div class="container-login100-form-btn">
					<a href="/">	<button class="login100-form-btn">
							Back
						</button></a>
					</div>
				</form> -->
			</div>
		</div>
	</div>




	<!--===============================================================================================-->
	<script
		src="${pageContext.request.contextPath}/Resources/LoginResources/vendor/jquery/jquery-3.2.1.min.js"></script>
	<!--===============================================================================================-->
	<script
		src="${pageContext.request.contextPath}/Resources/LoginResources/vendor/bootstrap/js/popper.js"></script>
	<script
		src="${pageContext.request.contextPath}/Resources/LoginResources/vendor/bootstrap/js/bootstrap.min.js"></script>
	<!--===============================================================================================-->
	<script
		src="${pageContext.request.contextPath}/Resources/LoginResources/vendor/select2/select2.min.js"></script>
	<!--===============================================================================================-->
	<script
		src="${pageContext.request.contextPath}/Resources/LoginResources/vendor/tilt/tilt.jquery.min.js"></script>
	<script>
		$('.js-tilt').tilt({
			scale: 1.1
		})
	</script>
	<!--===============================================================================================-->
	<script
		src="${pageContext.request.contextPath}/Resources/LoginResources/js/main.js"></script>
</body>
</html>