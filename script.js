const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="ebcaa915383e9f85cdfa059ee7959fe6";

const tempIcon=document.querySelector(".temp-icon");
const WeatherIcon=document.querySelector("#w-icon");

const cityName=document.querySelector("#city-name");
const temp=document.querySelector("#temp");
const Condition=document.querySelector("#Condition");
const humidity=document.querySelector("#humid");
const wind=document.querySelector("#wind");
const input=document.querySelector("#input");


async function showWeather(city) {
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);

    if(response.status == 404){
        cityName.innerHTML="City not found";
    }
    else{

    let data= await response.json();

    cityName.innerHTML=data.name;            //  for showing api data on screen
    temp.innerHTML=Math.round(data.main.temp);
    Condition.innerHTML=data.weather[0].main;
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed;

    if(data.weather[0].main==="Clear"){          // for change weather icons
        WeatherIcon.src="./weather-icon/clear.png";
    } 
    else if(data.weather[0].main==="Cloudy"){
        WeatherIcon.src="./weather-icon/cloudy.png";
    }
    else if(data.weather[0].main==="Partly Cloudy"){
        WeatherIcon.src="./weather-icon/partly Cloudy.png";
    }
    else if(data.weather[0].main==="Partly Cloudy"){
        WeatherIcon.src="./weather-icon/partly Cloudy.png";
    }
    else if(data.weather[0].main==="Rain"){
        WeatherIcon.src="./weather-icon/rain.png";
    }
    else if(data.weather[0].main==="Sleet"){
        WeatherIcon.src="./weather-icon/sleet.png";
    }
    else if(data.weather[0].main==="Snow"){
        WeatherIcon.src="./weather-icon/snow.png";
    }
    else if(data.weather[0].main==="Thundestrom"){
        WeatherIcon.src="./weather-icon/thoundestrom.png";
    }
    else{
        WeatherIcon.src="./weather-icon/cloudy.png";
    }
}
}

input.addEventListener("keydown",(event)=>{       //Event for function call
   if (event.key === 'Enter'){
        showWeather(input.value);
    }
})
