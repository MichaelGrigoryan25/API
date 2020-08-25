const numSpan = document.getElementById("number");
const intSpan = document.getElementById("integer");
const apiSpan = document.getElementById("status");

var data = new XMLHttpRequest();
data.responseType = "json";
data.addEventListener("load", reqListener);
data.open("GET", "/random-number-api", true);
data.send();

function reqListener() {
  (numSpan.innerHTML = this.response.results.randomNum),
    (intSpan.innerHTML = this.response.results.randomInt),
    (apiSpan.innerHTML = this.response.apiStatus);
}
