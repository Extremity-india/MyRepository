/**
 * 
 */
function getusers(){
	alert("In userdisplay")
	var req = new XMLHttpRequest();
	
	var url = "http://localhost:8095/userdisplay";
	alert(url)
	
	req.open("POST", url, true);
	req.send();
	req.onreadystatechange = function() {
		alert("in state");

		if (this.readyState == 4 && this.status == 200) {
			var userL= JSON.parse(req.responseText);
			alert("in if condition")
			document.getElementById("rdiv").style.display = "none";
			document.getElementById("d1").style.display = "block";
			var etable = document.getElementById("table");
			alert(userL)
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

				alert(userL[user].UserName)
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
			//	tabcell29.innerHTML = userL[user].userdocstatus;
				tabcell29.innerHTML ="<select name='userdocstatus'><option>select any one</option><option>not approved</option><option>approved</option></select>";

				
				var tabcell210 = row1.insertCell();
				tabcell210.innerHTML = userL[user].advisor.advisorID;
				
				var tabcell211 = row1.insertCell();
				tabcell211.innerHTML = "<input type = 'button' value='assign' />";
				

			}

		}
	}
}