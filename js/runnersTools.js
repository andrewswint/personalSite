// Distance convertions
function LengthConverter(valNum) {
  document.getElementById("outputMiles").innerHTML=valNum*0.62137;
}
  function LengthConverter(valNum) {
  document.getElementById("outputKilometers").innerHTML=valNum/0.62137;
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
		document.getElementById("dateOutput").innerHTML=Difference_In_Days.toFixed(0) + " days";
	}
}

