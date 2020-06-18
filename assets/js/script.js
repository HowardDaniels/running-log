var x = document.getElementById("coords");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

var newLat = Math.floor(((latitude + 90)/180)*(4**10));
console.log(newLat);
var newLong = Math.floor(((longitude + 180)/360)*(4**10));
console.log(newLong);

var newLatQuad = newLat.toString(4);
console.log(newLatQuad)
var newLongQuad = newLong.toString(4);
console.log(newLongQuad);

var geocode = "";

for (i = 0; i < 10; i++){
  if (newLatQuad.charAt(i) == "0" && newLongQuad.charAt(i) == "0"){
    geocode += "C";
  }
  else if (newLatQuad.charAt(i) == "0" && newLongQuad.charAt(i) == "1"){
    geocode += "D";
  }
  else if (newLatQuad.charAt(i) == "0" && newLongQuad.charAt(i) == "2"){
    geocode += "E";
  }
  else if (newLatQuad.charAt(i) == "0" && newLongQuad.charAt(i) == "3"){
    geocode += "F";
  }
  else if (newLatQuad.charAt(i) == "1" && newLongQuad.charAt(i) == "0"){
    geocode += "8";
  }
  else if (newLatQuad.charAt(i) == "1" && newLongQuad.charAt(i) == "1"){
    geocode += "9";
  }
  else if (newLatQuad.charAt(i) == "1" && newLongQuad.charAt(i) == "2"){
    geocode += "A";
  }
  else if (newLatQuad.charAt(i) == "1" && newLongQuad.charAt(i) == "3"){
    geocode += "B";
  }
  else if (newLatQuad.charAt(i) == "2" && newLongQuad.charAt(i) == "0"){
    geocode += "4";
  }
  else if (newLatQuad.charAt(i) == "2" && newLongQuad.charAt(i) == "1"){
    geocode += "5";
  }
  else if (newLatQuad.charAt(i) == "2" && newLongQuad.charAt(i) == "2"){
    geocode += "6";
  }
  else if (newLatQuad.charAt(i) == "2" && newLongQuad.charAt(i) == "3"){
    geocode += "7";
  }
  else if (newLatQuad.charAt(i) == "3" && newLongQuad.charAt(i) == "0"){
    geocode += "0";
  }
  else if (newLatQuad.charAt(i) == "3" && newLongQuad.charAt(i) == "1"){
    geocode += "1";
  }
  else if (newLatQuad.charAt(i) == "3" && newLongQuad.charAt(i) == "2"){
    geocode += "2";
  }
  else if (newLatQuad.charAt(i) == "3" && newLongQuad.charAt(i) == "3"){
    geocode += "3";
  }
}

console.log(geocode);
x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude + 
  "<br>Geocode: " + geocode;
}
