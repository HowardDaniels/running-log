var x = document.getElementById("coords");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  console.log(position);

  
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

var adjustedLatitude = latitude + 90;
var adjustedLongitude = longitude + 180;

console.log(adjustedLatitude);
console.log(adjustedLongitude);

var digitOneLat = 4 - 4 * adjustedLatitude/180;
var digitOneLong = 4 * adjustedLongitude/360;

console.log(digitOneLat + ", " + digitOneLong);

var digitTwoLat = (4 * adjustedLatitude/180) - digitOneLat;
var digitTwoLong = 4 - ((4 * adjustedLongitude/360) - digitOneLong);

// console.log(digitTwoLat + ", " + digitTwoLong);

// var digitOneLat = Math.floor(4 * adjustedLatitude/180);
// var digitOneLong = 4 - Math.floor(4 * adjustedLongitude/360);

// console.log(digitOneLat + ", " + digitOneLong);

// var digitOneLat = Math.floor(4 * adjustedLatitude/180);
// var digitOneLong = 4 - Math.floor(4 * adjustedLongitude/360);

// console.log(digitOneLat + ", " + digitOneLong);

// var digitOneLat = Math.floor(4 * adjustedLatitude/180);
// var digitOneLong = 4 - Math.floor(4 * adjustedLongitude/360);

// console.log(digitOneLat + ", " + digitOneLong);

// var digitOneLat = Math.floor(4 * adjustedLatitude/180);
// var digitOneLong = 4 - Math.floor(4 * adjustedLongitude/360);

// console.log(digitOneLat + ", " + digitOneLong);
}
