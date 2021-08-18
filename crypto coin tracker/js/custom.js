function initPage() {
	var  months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
	var today = new Date();
	var date = months[today.getMonth()]+' '+today.getDate()+', '+today.getFullYear();
	document.getElementById("date_today").innerHTML = date;
}