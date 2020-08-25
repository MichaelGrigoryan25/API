const container = document.getElementById("container");
const url = "/iss-api";

function liveUpdate() {
  function reqListener() {
    container.innerHTML = this.responseText;
  }

  var data = new XMLHttpRequest();
  data.addEventListener("load", reqListener);
  data.open("GET", "/iss-api");
  data.send();
}

setInterval(liveUpdate, prompt("Enter the interval time in miliseconds(e.g. 1000ms = 1s)"))

console.log("%cConnected to the Server", "color: lightgreen");
