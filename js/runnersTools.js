// Distance convertions
function LengthConverter(valNum) {
  document.getElementById("outputMiles").innerHTML = "Miles: " + (valNum * 0.62137).toFixed(2);
}
  function LengthConverter2(valNum) {
  document.getElementById("outputKilometers").innerHTML = "Kilometers: " + (valNum / 0.62137).toFixed(2);
}


// Date difference 
function dateDiff() {

	let date1 = new Date();
	if (document.getElementById("date1").value != "") {
		date1 = new Date(document.getElementById("date1").value);
	}
 	let date2 = new Date (document.getElementById("date2").value);
  
	// To calculate the time difference of two dates 
	let Difference_In_Time = date2.getTime() - date1.getTime(); 
  
	// To calculate the no. of days between two dates 
	let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  console.log(Difference_In_Days);

	if (Difference_In_Days >= 7) {
		document.getElementById("dateOutput").innerHTML= Math.floor(Difference_In_Days/7) + " weeks" + " " + Difference_In_Days.toFixed(0)%7 + " days";

	} else {
		document.getElementById("dateOutput").innerHTML="Time left " + Difference_In_Days.toFixed(0) + " days";
	}
}


// Pace calculator
var distanceInput = document.getElementById("distance"),
	hoursInput = document.getElementById("hours"),
	minutesInput = document.getElementById("minutes"),
	secondsInput = document.getElementById("seconds"),
	calculateBtn = document.getElementById("calculate_btn"),
	paceText = document.getElementById("pace");

calculateBtn.addEventListener("click", function() {
	var miles = parseFloat(distanceInput.value),
		hours = parseFloat(hoursInput.value),
		minutes = parseFloat(minutesInput.value),
		seconds = parseFloat(secondsInput.value);

	if(isNaN(miles)) {
		distanceInput.style.borderColor = "red";
		return;
	}
	else {
		distanceInput.style.borderColor = "initial";
	}
	if(isNaN(hours)) {
		hours = 0;
	}
	else {
		hoursInput.style.borderColor = "initial";
	}
	if(isNaN(minutes)) {
		minutes = 0;
	}
	else {
		minutesInput.style.borderColor = "initial";
	}
	if(isNaN(seconds)) {
		seconds = 0
	}
	else {
		secondsInput.style.borderColor = "initial";
	}

	var totalMinutes = hours * 60 + minutes + seconds / 60,
		pace = totalMinutes / miles,
		paceMinutes = Math.floor(pace),
		paceSeconds = Math.round((pace - paceMinutes) * 60);

	if(paceSeconds < 10) {
		paceSeconds = "0" + paceSeconds;
	}

	document.getElementById("pace").innerHTML="You need to run " + paceMinutes + ":" + paceSeconds + " minutes per mile.";
});


