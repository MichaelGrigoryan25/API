const container = document.getElementById("container");
const longitude = document.getElementById("longitude");
const latitude = document.getElementById("latitude");
const timestamp = document.getElementById("timestamp");
const apiStatusCont = document.getElementById("status");

// URL For the API
const url = "/iss-api";

// Limit the API request speed
var reqSpeed = prompt(
  "Enter the interval time in miliseconds(e.g. 1000ms = 1s). The value should be bigger than 600ms"
);
if (reqSpeed <= 600) {
  reqSpeed = 1000;
} else {
  reqSpeed = reqSpeed;
}

function liveUpdate() {
  var data = new XMLHttpRequest();
  data.responseType = "json";
  data.addEventListener("load", reqListener);
  data.open("GET", "/iss-api", true);
  data.send();

  function reqListener() {
    longitude.innerHTML = this.response.details.iss_position.longitude;
    latitude.innerHTML = this.response.details.iss_position.latitude;
    timestamp.innerHTML = this.response.details.timestamp;
    apiStatusCont.innerHTML = this.response.apiStatus;
  }
}

setInterval(liveUpdate, reqSpeed);
console.log("%cConnected to the Server", "color: lightgreen");

// Google Maps JS API
