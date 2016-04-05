function init() {
	var myForm = document.form1;
	function updateTimeZone() {
		var listCity = // get the select element with name listCity from myForm
		var selectedOption = //get the index value of the selected option in the list of cicties
		var offset = //get the value of the selected option (the number indicating the offset in minutes for the time in the selected city);
		var selectedCity = //get the selected option text;
		var dstAdjust = 0;
		if () { //check if myForm.chkDst is checked
			dstAdjust = 60;
		}
		updateOutput(selectedCity, offset, dstAdjust);
	}
	function updateOutput(selectedCity, offset, dstAdjust) {
		var now = new Date();
		document.getElementById("spanLocalTime").innerHTML = now.toLocaleString();
		now.setMinutes(now.getMinutes() + now.getTimezoneOffset() +
		parseInt(offset, 10) + dstAdjust);
		var resultsText = selectedCity + " time is " +
		now.toLocaleString();
		document.getElementById("divCityTime").innerHTML = resultsText;
	}
	myForm.listCity.addEventListener("change", updateTimeZone);
	myForm.chkDst.addEventListener("click", updateTimeZone);
	updateTimeZone();
}
window.onload = init;