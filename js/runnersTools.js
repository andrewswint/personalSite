// Distance convertions
function LengthConverter(valNum) {
  document.getElementById("outputMiles").innerHTML=valNum*0.62137;
}
  function LengthConverter(valNum) {
  document.getElementById("outputKilometers").innerHTML=valNum/0.62137;
}


// Date difference 
function dateDiff() {
  var date1 = new Date(document.getElementById("date1").value);
  console.log(date1);
  var date2 = new Date (document.getElementById("date2").value);
  console.log(date2);

  
// To calculate the time difference of two dates 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
document.getElementById("dateOutput").innerHTML=Difference_In_Days; 
}
