/* Global Variables */
const base_url = "http://localhost:5000";
const apiKey = "c4a338f26be2a6b1d154c8cc47a85fc9&units=imperial";
const url_api = "https://api.openweathermap.org/data/2.5/weather?q=";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

async function retrieveData() {
  const request = await fetch(`${base_url}/get-all`);
  try {
    // Transform into JSON
    const allData = await request.json();
    // Write updated data to DOM elements
    document.getElementById("temp").innerHTML =
      Math.round(allData?.temp) + "degrees";
    document.getElementById("content").innerHTML = allData?.feel;
    document.getElementById("date").innerHTML = allData?.date;
  } catch (error) {
    console.log("error", error);
    alert("Error to get data");
    // appropriately handle the error
  }
}
retrieveData();

// Define click on button
document.getElementById("generate").addEventListener("click", handleGetData);

// Function handle click
async function handleGetData(e) {
  e.preventDefault();

  const location = document.getElementById("zip").value.split(" ").join("+");
  const feeling = document.getElementById("feelings").value;
  const base_api_url = `${url_api}${location}&appid=${apiKey}`;

  const results = await fetch(base_api_url);

  try {
    const result = await results.json();
    const data = {
      lon: result?.coord?.lon,
      lat: result?.coord?.lat,
      weather: result?.weather[0]?.main,
      weatherIcon: result?.weather[0]?.icon,
      temp: result?.main?.temp,
      feels_like: result?.main?.feels_like,
      pressure: result?.main?.pressure,
      humidity: result?.main?.humidity,
      windSpeed: result?.wind?.speed,
      name: result?.name,
      feel: feeling,
      date: newDate,
    };

    await fetch(`${base_url}/set-city`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    document.getElementById("zip").value = "";
    document.getElementById("feelings").value = "";

    retrieveData();
  } catch (e) {
    alert("Error on request");
  }
}
