const key = 'b4e8a9d1c2cc4beca71175943240309';
const api = 'http://api.weatherapi.com/v1/current.json?key=b4e8a9d1c2cc4beca71175943240309&q={city}&aqi=no';
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("weather");

const getWeather = async(city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    return show(data);
}
const show = (data) => {
    console.log(data);
    side0.innerHTML = `               
            <div style="display: flex;">
                <img style="margin: 5px;" src="${data.current.condition.icon}" width="" alt="">
                <div style="display: flex;flex-direction: column">
                <h1 style="margin: 10px;">${data.current.dewpoint_c} ° C </h1>
                <h3 style="padding-left: 3PX;">${data.current.condition.text}</h2>
                </div>
            </div>     
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)