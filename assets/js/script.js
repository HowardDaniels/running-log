// function changeFunc() {

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

var newLatQuad = newLat.toString(4).padStart(10, "0");
console.log(newLatQuad)
var newLongQuad = newLong.toString(4).padStart(10, "0");
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

var selection = document.getElementById("converter");
selection.value = "coordstogeocode";
// var selectedValue = selection.value;
var result = document.getElementById("selectedConverter");
result.innerHTML = "<p>Latitude: </p> <input>" + "<br><p>Longitude: </p> <input>";


function changeFunc() {
  var selectedValue = selection.options[selection.selectedIndex].value;
  selection.value = selectedValue;


console.log(selection.value);

if (selectedValue == "coordstogeocode"){
  result.innerHTML = `<p>Latitude: </p> <input id="latitudeValue"> <br><p>Longitude: </p> <input id="longitudeValue">`;
}

else{
  result.innerHTML = "<p>Geocode: </p> <input>";
}
// }

function coordstogeocode(){
var latitudeValue = document.getElementById("latitudeValue").value;
var longitudeValue = document.getElementById("longitudeValue").value;

var lat = Number(latitudeValue);
var long = Number(longitudeValue);

console.log(latitudeValue + " " + longitudeValue);
console.log(latitudeValue += longitudeValue);
console.log(lat + long);

var newLat2 = Math.floor(((lat + 90)/180)*(4**10));
console.log(newLat2);
var newLong2 = Math.floor(((long + 180)/360)*(4**10));
console.log(newLong2);

var newLatQuad2 = newLat2.toString(4).padStart(10, "0");
console.log(newLatQuad2)
var newLongQuad2 = newLong2.toString(4).padStart(10, "0");
console.log(newLongQuad2);

var geocode2 = "";

for (i = 0; i < 10; i++){
  if (newLatQuad2.charAt(i) == "0" && newLongQuad2.charAt(i) == "0"){
    geocode2 += "C";
  }
  else if (newLatQuad2.charAt(i) == "0" && newLongQuad2.charAt(i) == "1"){
    geocode2 += "D";
  }
  else if (newLatQuad2.charAt(i) == "0" && newLongQuad2.charAt(i) == "2"){
    geocode2 += "E";
  }
  else if (newLatQuad2.charAt(i) == "0" && newLongQuad2.charAt(i) == "3"){
    geocode2 += "F";
  }
  else if (newLatQuad2.charAt(i) == "1" && newLongQuad2.charAt(i) == "0"){
    geocode2 += "8";
  }
  else if (newLatQuad2.charAt(i) == "1" && newLongQuad2.charAt(i) == "1"){
    geocode2 += "9";
  }
  else if (newLatQuad2.charAt(i) == "1" && newLongQuad2.charAt(i) == "2"){
    geocode2 += "A";
  }
  else if (newLatQuad2.charAt(i) == "1" && newLongQuad2.charAt(i) == "3"){
    geocode2 += "B";
  }
  else if (newLatQuad2.charAt(i) == "2" && newLongQuad2.charAt(i) == "0"){
    geocode2 += "4";
  }
  else if (newLatQuad2.charAt(i) == "2" && newLongQuad2.charAt(i) == "1"){
    geocode2 += "5";
  }
  else if (newLatQuad2.charAt(i) == "2" && newLongQuad2.charAt(i) == "2"){
    geocode2 += "6";
  }
  else if (newLatQuad2.charAt(i) == "2" && newLongQuad2.charAt(i) == "3"){
    geocode2 += "7";
  }
  else if (newLatQuad2.charAt(i) == "3" && newLongQuad2.charAt(i) == "0"){
    geocode2 += "0";
  }
  else if (newLatQuad2.charAt(i) == "3" && newLongQuad2.charAt(i) == "1"){
    geocode2 += "1";
  }
  else if (newLatQuad2.charAt(i) == "3" && newLongQuad2.charAt(i) == "2"){
    geocode2 += "2";
  }
  else if (newLatQuad2.charAt(i) == "3" && newLongQuad2.charAt(i) == "3"){
    geocode2 += "3";
  }
}

console.log(geocode2);
document.getElementById("answer").innerHTML = geocode2;
}

document.getElementById("submit").addEventListener("click", function(){
  if (selectedValue == "coordstogeocode"){
  coordstogeocode();
  }
  else if (selectedValue == "geocodetocoords"){
   console.log("sdssdfsdf")
    }
})

}

changeFunc();

$("#name").attr("src", "../../../link.txt");

// var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + apiKey; 

// $.ajax({
//   url: queryURL,
//   method: "GET"
// })

// .then(function(response) {
//   console.log(response);
//   $("#name").text(response.name);
//   $("#temp").text("Temp: " + Math.round(response.main.temp - 273.15) + " " + "\xB0" + "C/" + Math.round(((response.main.temp - 273.15)* 9/5) + 32) + " " + "\xB0" + "F");
//   $("#wind").text("Wind speed: " + Math.round(response.wind.speed * 1.609) + " kph/" + Math.round(response.wind.speed) + " mph");
//   $("#humidity").text("Humidity: " + response.main.humidity + "%");
//   $("#icon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");


// })