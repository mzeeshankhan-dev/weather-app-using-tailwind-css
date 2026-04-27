const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="ebcaa915383e9f85cdfa059ee7959fe6";

const tempIcon=document.querySelector(".temp-icon");

const cityName=document.querySelector("#city-name");
const temp=document.querySelector("#temp");
const Condition=document.querySelector("#Condition");
const humidity=document.querySelector("#humid");
const wind=document.querySelector("#wind");
const input=document.querySelector("#input");

async function showWeather(city) {
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data= await response.json();
    console.dir(data);

    cityName.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp);
    Condition.innerHTML=data.weather[0].main;
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed;
}

input.addEventListener("keydown",(event)=>{
   if (event.key === 'Enter'){
        showWeather(input.value);
    }
})