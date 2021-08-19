var today = new Date();

function initPage() {
	setDate();
	setHour();
}

function setDate() {
	var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
	var date = months[today.getMonth()]+' '+today.getDate()+', '+today.getFullYear();
	document.getElementById("date_today").innerHTML = date;
}

function setHour() {
	var hours = today.getHours();
  	var minutes = today.getMinutes();
	var ampm = "AM";
	
	if (hours >= 12) {
		ampm = "PM";
		
		if (hours > 12) {
			hours = hours - 12;
		}
	}
	else {
		ampm = "AM";
		
		if (hours = 0) {
			hours = 12;
		}
	}
	
  	var strTime = hours + ":" + minutes + " " + ampm;
	console.log(strTime);
	document.getElementById("time_now").innerHTML = strTime;
	document.title = "Crypto Price Checker: " + strTime;
}