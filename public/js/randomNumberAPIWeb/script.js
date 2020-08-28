const numSpan = document.getElementById("number");
const intSpan = document.getElementById("integer");
const apiSpan = document.getElementById("status");

async function fetchAPI() {
  const response = await fetch("/random-number-api");
  const data = await response.json();

  var randomNumber = Number(data.results.randomNum);
  var randomInteger = Number(data.results.randomInt);
  var apiStatus = String(data.apiStatus);

  numSpan.innerHTML = randomNumber;
  intSpan.innerHTML = randomInteger;
  apiSpan.innerHTML = apiStatus;
}

fetchAPI()