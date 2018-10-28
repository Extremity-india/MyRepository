/**
 * 
 */
function DisplayAdvisor() {
	var req = new XMLHttpRequest();
	alert("in display advisor")
	var url = "http://localhost:8095/displayAdvisor";
	alert(url)
	req.open("GET", url, true);
	req.send();

	document.getElementById("tohide").style.display = "none";

	req.onreadystatechange = function() {
		alert("in state");

		if (this.readyState == 4 && this.status == 200) {

			var advisorL = JSON.parse(req.responseText);
			alert(req.responseText)
			document.getElementById("d1").style.display = "block";
			var etable = document.getElementById("table");
			var row = etable.insertRow();
			// row1
			var cell11 = row.insertCell();
			cell11.innerHTML = "ID";

			var cell12 = row.insertCell();
			cell12.innerHTML = "Name";

			var cell13 = row.insertCell();
			cell13.innerHTML = "Email";

			var cell14 = row.insertCell();
			cell14.innerHTML = "contact";

			var cell15 = row.insertCell();
			cell15.innerHTML = "Address";

			var cell16 = row.insertCell();
			cell16.innerHTML = "DOB";

			var cell17 = row.insertCell();
			cell17.innerHTML = "PIN no";

			var cell18 = row.insertCell();
			cell18.innerHTML = "Experince";

			var cell19 = row.insertCell();
			cell19.innerHTML = "advisorArea";

			for ( var adv in advisorL) {
				var row1 = etable.insertRow();
				// alert("=====5===="+row1)

				var tabCell = row1.insertCell();
				tabCell.innerHTML = advisorL[adv].advisorID;

				var tabCell2 = row1.insertCell();
				tabCell2.innerHTML = advisorL[adv].advisorName;

				var tabCell3 = row1.insertCell();
				tabCell3.innerHTML = advisorL[adv].advisorEmail;
				var tabCell4 = row1.insertCell();
				tabCell4.innerHTML = advisorL[adv].advisorContactno;

				var tabCell5 = row1.insertCell();
				tabCell5.innerHTML = advisorL[adv].advisorAddress;

				var tabCell6 = row1.insertCell();
				tabCell6.innerHTML = advisorL[adv].advisorDOB;

				var tabCell7 = row1.insertCell();
				tabCell7.innerHTML = advisorL[adv].advisorAddPin;

				var tabCell8 = row1.insertCell();
				tabCell8.innerHTML = advisorL[adv].addvisorExperince;

				var tabCell9 = row1.insertCell();
				tabCell9.innerHTML = advisorL[adv].advisorArea;

			}

		}
	}
}

function addAdvisor() {
	document.getElementById("tohide").style.display = "none";
	document.getElementById("table").style.display = "none";

	document.getElementById("d2").style.display = "block";
}
function register() {
	alert("in register");
	var id = document.getElementById("adid").value;
	var name = document.getElementById("adname").value;
	var email = document.getElementById("ademail").value;
	var dob = document.getElementById("DOB").value;
	var admob = document.getElementById("admob").value;
	var add = document.getElementById("adadd").value;
	var adpin = document.getElementById("adpin").value;
	var area = document.getElementById("adarea").value;
	var admg = document.getElementById("admag").value;
	alert(admg)
	var exp = document.getElementById("adexp").value;
	var area = document.getElementById("adarea").value;

	var username = document.getElementById("adun").value;
	var pass = document.getElementById("adpass").value;
	// document.myreg.action="edit";

	var req = new XMLHttpRequest();
	alert("in display advisor")
	var url = "http://localhost:8095/register?advisorID=" + id
			+ "&advisorName=" + name + "&advisorEmail=" + email
			+ "&advisorContactno=" + admob + "&advisorAddress=" + add
			+ "&advisorDOB=" + dob + "&advisorAddPin=" + adpin
			+ "&addvisorExperince=" + exp + "&advisorArea=" + area
			+ "&advisorUserName=" + username + "&advisorPassword=" + pass
			+ "&advisormanager=" + admg;
	alert(url)
	req.open("POST", url, true);
	req.send();

	req.onreadystatechange = function() {
		alert("in state");

		if (this.readyState == 4 && this.status == 200) {
			alert("4 & 200")
			location.reload();

		}

	}

}

function userdisplay() {
	alert("In userdisplay")
	var req = new XMLHttpRequest();
	alert("in display advisor")
	var url = "http://localhost:8095/userdisplay";
	alert(url)
	req.open("POST", url, true);
	req.send();
	req.onreadystatechange = function() {
		alert("in state");

		if (this.readyState == 4 && this.status == 200) {
			alert("4 & 200")
			var userL = JSON.parse(req.responseText);
			document.getElementById("tohide").style.display = "none";
			document.getElementById("table").style.display = "none";
			document.getElementById("ulisttable").style.display = "block";
			var etable = document.getElementById("table1");
			alert(req.responseText)
			var row = etable.insertRow();
			// 1 row

			var cell10 = row.insertCell();
			cell10.innerHTML = "ID";
			var cell11 = row.insertCell();
			cell11.innerHTML = "Name";
			var cell12 = row.insertCell();
			cell12.innerHTML = "Email";
			var cell13 = row.insertCell();
			cell13.innerHTML = "DOB";
			var cell14 = row.insertCell();
			cell14.innerHTML = "Mobile no";
			var cell15 = row.insertCell();
			cell15.innerHTML = "Address";
			var cell16 = row.insertCell();
			cell16.innerHTML = "Area";
			var cell17 = row.insertCell();
			cell17.innerHTML = "Area PIN";
			var cell18 = row.insertCell();
			cell18.innerHTML = "Document status";
			var cell19 = row.insertCell();
			cell19.innerHTML = "Assigned Advisor";

			for ( var user in userL) {
				var row1 = etable.insertRow();

				var tabCell21 = row1.insertCell();
				tabCell21.innerHTML = userL[user].userID;

				var tabcell22 = row1.insertCell();
				tabcell22.innerHTML = userL[user].UserName;

				var tabcell23 = row1.insertCell();
				tabcell23.innerHTML = userL[user].userEmail;

				var tabcell24 = row1.insertCell();
				tabcell24.innerHTML = userL[user].userDOB;

				var tabcell25 = row1.insertCell();
				tabcell25.innerHTML = userL[user].usercontact;

				var tabcell26 = row1.insertCell();
				tabcell26.innerHTML = userL[user].userAddress;

				var tabcell27 = row1.insertCell();
				tabcell27.innerHTML = userL[user].userArea;

				var tabcell28 = row1.insertCell();
				tabcell28.innerHTML = userL[user].userPin;

				var tabcell29 = row1.insertCell();
				tabcell29.innerHTML = userL[user].userdocstatus;

				
				var tabcell210 = row1.insertCell();
				tabcell210.innerHTML = userL[user].advisor.advisorID;
				

			}

		}

	}

}

function assignAdvisor(){
	
	alert("In userdisplay")
	var req = new XMLHttpRequest();
	alert("in display advisor")
	var url = "http://localhost:8095/assignAdvisor";
	alert(url)
	alert(url)
	req.open("POST", url, true);
	req.send();
	req.onreadystatechange = function() {
		alert("in state");

		if (this.readyState == 4 && this.status == 200) {
			alert("4 & 200")
			var userL = JSON.parse(req.responseText);
			document.getElementById("tohide").style.display = "none";
			document.getElementById("table").style.display = "none";
			document.getElementById("ulisttable").style.display = "none";
			document.getElementById("asignadvisor").style.display = "block";

			
			var etable = document.getElementById("userdisplayinassignadvisor");
			alert(req.responseText)
			var row = etable.insertRow();
			// 1 row

			var cell10 = row.insertCell();
			cell10.innerHTML = "ID";
			var cell11 = row.insertCell();
			cell11.innerHTML = "Name";
			var cell12 = row.insertCell();
			cell12.innerHTML = "Email";
			var cell13 = row.insertCell();
			cell13.innerHTML = "DOB";
			var cell14 = row.insertCell();
			cell14.innerHTML = "Mobile no";
			var cell15 = row.insertCell();
			cell15.innerHTML = "Address";
			var cell16 = row.insertCell();
			cell16.innerHTML = "Area";
			var cell17 = row.insertCell();
			cell17.innerHTML = "Area PIN";
			var cell18 = row.insertCell();
			cell18.innerHTML = "Document status";
			var cell19 = row.insertCell();
			cell19.innerHTML = "Advisor";
			
			var cell10=row.insertCell();
			cell10.innerHTML = "Assign advisor"

			for ( var user in userL) {
				var row1 = etable.insertRow();

				var tabCell21 = row1.insertCell();
				tabCell21.innerHTML = userL[user].userID;

				var tabcell22 = row1.insertCell();
				tabcell22.innerHTML = userL[user].UserName;

				var tabcell23 = row1.insertCell();
				tabcell23.innerHTML = userL[user].userEmail;

				var tabcell24 = row1.insertCell();
				tabcell24.innerHTML = userL[user].userDOB;

				var tabcell25 = row1.insertCell();
				tabcell25.innerHTML = userL[user].usercontact;

				var tabcell26 = row1.insertCell();
				tabcell26.innerHTML = userL[user].userAddress;

				var tabcell27 = row1.insertCell();
				tabcell27.innerHTML = userL[user].userArea;

				var tabcell28 = row1.insertCell();
				tabcell28.innerHTML = userL[user].userPin;

				var tabcell29 = row1.insertCell();
				tabcell29.innerHTML = userL[user].userdocstatus;

				
				var tabcell210 = row1.insertCell();
				tabcell210.innerHTML = userL[user].advisor.advisorID;
				
				var tabcell211 = row1.insertCell();
				tabcell211.innerHTML = "<input type = 'button' value='assign'  onclick='assign("+userL[user].userID+"," +userL[user].userPin+ ")'/>";
				

			}

		}

	}	
}
function asgn(adid,uid) {
	alert("advisor--->"+adid);
	
	alert("UID--->"+uid);
	 var request = new XMLHttpRequest();
	 var url = "http://localhost:8095/adud?advisorID="+adid+"&userID="+uid;

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

	 var req = new XMLHttpRequest();
	
	alert(uid)
	alert(pin)
	var url = "http://localhost:8095/assign?advisorAddPin=" + pin;
	//var url="assign";
	alert(url)
	req.open("POST", url, true);

	req.send();
	req.onreadystatechange = function() {
/* 					alert("in state");
*/					if (this.readyState == 4 && this.status == 200) {
			var advisorL = JSON.parse(req.responseText);
			document.getElementById("assignadvisor").style.display = "block";
			
			alert(req.responseText)
			alert(advisorL)
			 
			 var etable =document.getElementById("assignadv");
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
/*function profile(ID,advm) {
	alert("in function")
	 var req = new XMLHttpRequest();
	alert(ID)
	
	var url = "http://localhost:8095/profile?advisormanagerID=" + ID;
	//var url="assign";
	alert(url)
	req.open("POST", url, true);

	req.send();
	req.onreadystatechange = function() {
 					alert("in state");
					if (this.readyState == 4 && this.status == 200) {
			var advisorML = JSON.parse(req.responseText);
			document.getElementById("divprofile").style.display = "block";
			document.getElementById("tohide").style.display = "none";

			alert(req.responseText)
			alert(advisorML.advisorName)
			 
			 var etable =document.getElementById("admprofile");
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
				 	cell10.innerHTML="Edit"
				 		alert("finish");
				 	for (var advm in advisorML) 
				 	  {
				 		 var row1=etable.insertRow();
				 			//alert("=====5===="+row1)
				 			
				 			
				 			var tabCell=row1.insertCell();
				 			tabCell.innerHTML=advisorML.advisormanagerID;
//advisormanagerUserName,advisormanagerArea,addvisormanagerExperince,advisormanagerAddPin,advisormanagerDOB, advisormanagerAddress,,,,
				 			var tabCell2=row1.insertCell();
				 			tabCell2.innerHTML=advisorML.advisormanagerName;

				 			var tabCell3=row1.insertCell();
				 			tabCell3.innerHTML=advisorML.advisormanagerEmail;
				 			var tabCell4=row1.insertCell();
				 			tabCell4.innerHTML=advisorML.advisormanagerContactno;
				 			
				 			var tabCell5=row1.insertCell();
				 			tabCell5.innerHTML=advisorML.advisormanagerAddress;
				 			
				 			var tabCell6=row1.insertCell();
				 			tabCell6.innerHTML=advisorML.advisormanagerDOB;
				 			
				 			var tabCell7=row1.insertCell();
				 			tabCell7.innerHTML=advisorML.advisormanagerAddPin;

				 			var tabCell8=row1.insertCell();
				 			tabCell8.innerHTML=advisorML.addvisormanagerExperince;
				 			
				 			var tabCell9=row1.insertCell();
				 			tabCell9.innerHTML=advisorML.advisormanagerArea;
				 			
				 			 var tabCell10=row1.insertCell();
				 				tabCell10.innerHTML="<input type = 'button' value='Edit' id='"+advisorML+"'  onclick='editadv(this.id)'/>";
				 				
				 			   
				 			
				 		//} 

				 	
			}
	}


}*/

function profile(ID,advm) {
	alert("in function")
	 var req = new XMLHttpRequest();
	alert(ID)
	
	var url = "http://localhost:8095/profile?advisormanagerID=" + ID;
	//var url="assign";
	alert(url)
	req.open("POST", url, true);

	req.send();
	req.onreadystatechange = function() {
 					alert("in state");
					if (this.readyState == 4 && this.status == 200) {
			var advisorML = JSON.parse(req.responseText);
			document.getElementById("divprofile").style.display = "block";
			document.getElementById("tohide").style.display = "none";

			alert(req.responseText)
			alert(advisorML.advisorName)
			 
			 var etable =document.getElementById("admprofile");
			 var row= etable.insertRow();
	 		 var row1=etable.insertRow();

			 //row1
	 		 var row11= etable.insertRow();
	 		 var row12=etable.insertRow();
	 		 
			 	var cell11=row11.insertCell();
			 	cell11.innerHTML="ID";
			 	
				var tabCell12=row12.insertCell();
	 			tabCell12.innerHTML="<input type = 'text' name = 'advisormanagerID' id = 'admid' value = '" + advisorML.advisormanagerID + "'/>";	
////////////////////////////////////////////////////////////////
			 	
	 			 var row13= etable.insertRow();
		 		 var row14=etable.insertRow();
	 			
			 	var cell13=row13.insertCell();
			 	cell13.innerHTML="Name";
		
				var tabCell14=row14.insertCell();
	 			tabCell14.innerHTML="<input type = 'text' name = 'advisormanagerName' id = 'admname' value = '" + advisorML.advisormanagerName + "'/>";

			 	
	 			
///////////////////////////////////////////////////////////////	
	 				 			
	 			
//////////////////////////////////////////////////////////////	
	 			
	 			 var row15= etable.insertRow();
		 		 var row16=etable.insertRow();
	 			
			 		var cell15=row15.insertCell();
			 	cell15.innerHTML="Email";
	
			 	var tabCell16=row16.insertCell();
	 			tabCell16.innerHTML="<input type = 'text' name = 'advisormanagerEmail' id = 'ademail' value = '" + advisorML.advisormanagerEmail + "'/>";


//////////////////////////////////////////////////////////////		
	 			
	 			 var row17= etable.insertRow();
		 		 var row18=etable.insertRow();
	 			
			  	var cell17=row17.insertCell();
			 	cell17.innerHTML="contact";
			 	
			 	var tabCell18=row18.insertCell();
	 			tabCell18.innerHTML="<input type = 'text' name = 'advisormanagerContactno' id = 'admcontact' value = '" + advisorML.advisormanagerContactno + "'/>";

			 	
//////////////////////////////////////////////////////////////			
	 			
	 			
	 			
	 			 var row19= etable.insertRow();
		 		 var row10=etable.insertRow();
	 			
			 	var cell19=row19.insertCell();
			 	cell19.innerHTML="Address";
			 	
			 	var tabCell10=row10.insertCell();
	 			tabCell10.innerHTML="<input type = 'text' name = 'advisormanagerAddress' id = 'admadd' value = '" + advisorML.advisormanagerAddress + "'/>";
	
//////////////////////////////////////////////////////////////		
	 			
	 			 var row11= etable.insertRow();
		 		 var row12=etable.insertRow();
	 			
			 	var cell11=row11.insertCell();
			 	cell11.innerHTML="DOB";
			 	
			 	var tabCell12=row12.insertCell();
	 			tabCell12.innerHTML="<input type = 'date' name = 'advisormanagerDOB' id = 'admdob' value = '" + advisorML.advisormanagerDOB + "'/>";

			 	
//////////////////////////////////////////////////////////////	
	 			
	 			 var row13= etable.insertRow();
		 		 var row14=etable.insertRow();
	 			
			 	var cell13=row13.insertCell();
			 	cell13.innerHTML="PIN no";
			 	
			 	var tabCell14=row14.insertCell();
	 			tabCell14.innerHTML="<input type = 'text' name = 'advisormanagerAddPin' id = 'admapin' value = '" + advisorML.advisormanagerAddPin + "'/>";

			 	
			 	
//////////////////////////////////////////////////////////////	
	 			
	 			 var row15= etable.insertRow();
		 		 var row16=etable.insertRow();
	 			
			var cell15=row15.insertCell();
			 	cell15.innerHTML="Experince";
			 	
			 	var tabCell16=row16.insertCell();
	 			tabCell16.innerHTML="<input type = 'text' name = 'addvisormanagerExperince' id = 'admexp' value = '" + advisorML.addvisormanagerExperince + "'/>";

			 	
//////////////////////////////////////////////////////////////
	 			
	 			 var row17= etable.insertRow();
		 		 var row18=etable.insertRow();
	 			
			 	var cell17=row17.insertCell();
			 		cell17.innerHTML="advisorArea";

			 		var tabCell18=row18.insertCell();
		 			tabCell18.innerHTML="<input type = 'text' name = 'advisormanagerArea' id = 'admarea' value = '" + advisorML.advisormanagerArea + "'/>";

//////////////////////////////////////////////////////////////			 
		 			
		 			 var row19= etable.insertRow();
			 		 var row20=etable.insertRow();
		 			
			 		var cell19=row19.insertCell();
			 		cell19.innerHTML="User name";
			 		
			 		var tabCell20=row20.insertCell();
		 			tabCell20.innerHTML="<input type = 'text' name = 'advisormanagerUserName' id = 'admun' value = '" + advisorML.advisormanagerUserName + "'/>";

			 		
//////////////////////////////////////////////////////////////		
		 			
		 			 var row21= etable.insertRow();
			 		 var row22=etable.insertRow();
		 			
			 		var cell21=row21.insertCell();
			 		cell21.innerHTML="password";	
			 		
			 		var tabCell22=row22.insertCell();
		 			tabCell22.innerHTML="<input type = 'text' name = 'advisormanagerPassword' id = 'admpass' value = '" + advisorML.advisormanagerPassword + "'/>";

			 		
//////////////////////////////////////////////////////////////		
		 			
		 			 var row23= etable.insertRow();
			 		 var row24=etable.insertRow();
		 			
			 		var cell23=row23.insertCell();
				 	cell23.innerHTML="update"
				 		 var tabCell24=row24.insertCell();
	 				tabCell24.innerHTML="<input type = 'button' value='update' id='"+advisorML+"'  onclick='updateadvm()'/>";

				 		
/////////////////////////////////////////////////////////////
				 		alert("finish");
				 				 	
			}
	}


}


function updateadvm() {
	
		alert("in register");
		var id = document.getElementById("admid").value;
		var name = document.getElementById("admname").value;
		var email = document.getElementById("ademail").value;
		var dob = document.getElementById("admdob").value;
		var admob = document.getElementById("admcontact").value;
		

		var add = document.getElementById("admadd").value;
		var adpin = document.getElementById("admapin").value;
		var area = document.getElementById("admarea").value;
		var admg = document.getElementById("admag").value;
		var exp = document.getElementById("admexp").value;
		
		
		var uname = document.getElementById("admun").value;
		var pass = document.getElementById("admpass").value;
		
		
	// document.myreg.action="edit";

	var req = new XMLHttpRequest();
	alert("in display advisor")
	var url = "http://localhost:8095/update?advisormanagerID=" + id
			+ "&advisormanagerName=" + name + "&advisormanagerEmail=" + email
			+ "&advisormanagerContactno=" + admob + "&advisormanagerAddress=" + add
			+ "&advisormanagerDOB=" + dob + "&advisormanagerAddPin=" + adpin
			+ "&addvisormanagerExperince=" + exp + "&advisormanagerArea=" + area
			+ "&advisormanagerUserName=" + uname + "&advisormanagerPassword=" + pass;
			
	alert(url)
	req.open("POST", url, true);
	req.send();
}
