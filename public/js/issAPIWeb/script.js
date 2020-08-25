const container = document.getElementById("container");
const longitude = document.getElementById("longitude");
const latitude = document.getElementById("latitude");
const url = "/iss-api";

// Limit the API request speed
var reqSpeed = prompt("Enter the interval time in miliseconds(e.g. 1000ms = 1s)")
if (reqSpeed <= 100 <= 200 <= 300 <= 400 <= 500 <= 600) {
  reqSpeed = 1000;
} else {
  reqSpeed = reqSpeed;
}

function liveUpdate() {
  var data = new XMLHttpRequest();
  data.responseType = 'json';
  data.addEventListener("load", reqListener);
  data.open("GET", "/iss-api", true);
  data.send();

  function reqListener() {
    longitude.innerHTML = this.response.iss_position.longitude;
    latitude.innerHTML = this.response.iss_position.latitude;
  }
}

setInterval(
  liveUpdate,
  reqSpeed
);

console.log("%cConnected to the Server", "color: lightgreen");
