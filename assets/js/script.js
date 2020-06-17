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

var newLat = Math.floor(((latitude + 90)/180)*(4**10));
console.log(newLat);
var newLong = Math.floor(((longitude + 180)/360)*(4**10));
console.log(newLong);

var arrexp9Lat = [];

for (i = 0; i < 4; i++){
  console.log((4**9)*i);
  if (((4**9)*i) >= newLat){
    arrexp9Lat.push(i);
  }
}

console.log(arrexp9Lat[0]);
}
