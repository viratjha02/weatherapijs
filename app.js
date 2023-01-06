const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const city_name = document.querySelector("#city_name");
const reset = document.querySelector("#reset")
const showData = document.querySelector("#showData")
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a166ea389a60a0d17ef6e0e2f0308f3&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    showWeather(data);
}

const showWeather = (data) => {
    console.log(data);
    showData.innerHTML =
        `<h5 class="card-title">Weather Forcast <strong> ${data.weather[0].main} </strong></h5>
          <p class="card-text"><strong> Temp : </strong> ${data.main.temp}°C </p> 
          <p class="card-text"><strong> Min-Temp : </strong> ${data.main.temp_min}°C </p> 
          <p class="card-text"><strong> Max-Temp : </strong> ${data.main.temp_max}°C </p> 
          <p class="card-text"><strong> Visibility : </strong> ${data.visibility} </p>  
          `
}

form.addEventListener(
    "submit", (event) => {
        getWeather(search.value);
        city_name.innerHTML = search.value;
        event.preventDefault();
    }
)

// reset.addEventListener(
//     "click", () => {
//         form.reset();
//     }
// )

