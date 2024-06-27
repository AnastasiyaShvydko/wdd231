import {api_connection_forecast,api_connection_weather} from './weather.js';
import {getDataMembers} from './getMemberInfo.js';
import {createDataCard} from './card.js';
const home_block = document.getElementById('home_block');
let weather = await api_connection_weather();
let forecast = await api_connection_forecast();


const getDataHome = () =>{
    let img = document.createElement('img');
    img.src = "images/main_img.jpg";
    home_block.appendChild(img);
}


const viewDataCurrentWeather = () =>{
    let weather_section = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.innerHTML = "Current Weather";
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    // for (let i of api_connection_weather()){
    //     let li = document.createElement('li');

    // }
    
    let li_temp = document.createElement('li');
    li_temp.innerHTML = weather.main.temp;
    for(let i of weather.weather){
        let text = i.description;
        let textArray = text.split(" ");
        let newLine = "";
        console.log(textArray)
        for (let t of textArray){
            
            newLine += `${t.charAt(0).toUpperCase()}${t.slice(1)} `;
        }
        let li_event = document.createElement('li');
        li_event.innerHTML = `${newLine}`;
        ul.appendChild(li_event);
    }
    // let li_cloudy = document.createElement('li');
    // li_cloudy.innerHTML = `${weather.weather[0].description}`;
    let li_high = document.createElement('li');
    li_high.innerHTML = `High: ${weather.main.temp_max}`;
    let li_low = document.createElement('li');
    li_low.innerHTML = `Low: ${weather.main.temp_min}`;
    let li_pressure= document.createElement('li');
    li_pressure.innerHTML = `Pressure: ${weather.main.pressure}`;
    let li_humidity = document.createElement('li');
    li_humidity.innerHTML = `Humidity: ${weather.main.humidity}`;

    let sunrise = weather.sys.sunrise;
    let sunset = weather.sys.sunset;

    let sunrise_time = `${new Date(sunrise * 1000).getHours()}:${new Date(sunrise * 1000).getMinutes()}`;
    let sunset_time = `${new Date(sunset * 1000).getHours()}:${new Date(sunset * 1000).getMinutes()}`;

    let li_sunrise= document.createElement('li');
    li_sunrise.innerHTML = `Sunrise: ${sunrise_time}`;
    let li_sunset = document.createElement('li');
    li_sunset.innerHTML = `Sunset: ${sunset_time}`;

    ul.appendChild(li_temp);
    //ul.appendChild(li_cloudy);
    ul.appendChild(li_high);
    ul.appendChild(li_low);
    ul.appendChild(li_pressure);
    ul.appendChild(li_humidity);
    ul.appendChild(li_sunrise);
    ul.appendChild(li_sunset);

    div.appendChild(ul);
    weather_section.appendChild(h2);
    weather_section.appendChild(div);
    home_block.appendChild(weather_section);

}
//new Date(sunriseUnix * 1000)

const viewDataForecast = () =>{
    let forecast_section = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.innerHTML = "Forecast";
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        let li_temp = document.createElement('li');
        li_temp.innerHTML = forecast.list[i].main.temp;
        ul.appendChild(li_temp);
        
    }
    div.appendChild(ul);
    forecast_section.appendChild(h2);
    forecast_section.appendChild(div);
    home_block.appendChild(forecast_section);

}

const showMembers = async () => {
let membersArray = await getDataMembers();
let membersSilverGold = [];
for (let i of membersArray ){
    if (i.membership_level == 2 || i.membership_level == 3 ){
        membersSilverGold.push(i);
    }
    
}
let randomArray = [];
let total = 0;
while (total < 2){
for (let i of membersSilverGold){
    let index = Math.floor(Math.random() * membersSilverGold.length);
    if(randomArray.includes(membersSilverGold[index])){
        index = Math.floor(Math.random() * membersSilverGold.length);
    }
    else{
        randomArray.push(membersSilverGold[index]);
        total++;
    }

    }
}
//console.log(membersSilverGold);
createDataCard(randomArray,home_block);
}

// console.log(weather);
// console.log(forecast);
//console.log(randomArray);

getDataHome()
viewDataCurrentWeather()
viewDataForecast()
showMembers()
