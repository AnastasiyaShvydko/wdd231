import {api_connection_forecast,api_connection_weather} from './weather.js';
import {getDataMembers} from './getMemberInfo.js';
import {createDataCard} from './card.js';
const home_block = document.getElementById('home_block');
let weather = await api_connection_weather();
let forecast = await api_connection_forecast();




const getDataImgSection= () =>{
    let div = document.createElement('div');
    div.id = "picture_div";
    let picture = document.createElement('picture');

    let src1 = document.createElement('source');
    src1.srcset = 'images/large.webp';
    src1.media = "(min-width: 1000px)";
    let src2 = document.createElement('source');
    src2.srcset = 'images/medium.webp';
    src2.media = "(min-width: 500px)";
    let img = document.createElement('img');
    img.src = "images/small.webp";
    img.alt = "our community picture";
   
    
    let btn_join = document.createElement('button');
    btn_join.innerHTML= 'Join Us';


    home_block.appendChild(div);
    div.appendChild(picture);
    picture.appendChild(src1);
    picture.appendChild(src2);
    picture.appendChild(img);
    div.appendChild(btn_join);

}

{/* <picture>
            <source srcset="images/large-goose.webp" media="(min-width: 1000px)">
            <source srcset="images/medium-goose.webp" media="(min-width: 500px)">
            <img src="images/small-goose.webp" alt="Canadian goose" width="500" height="250">
        </picture> */}


const getEventsSection = () =>{
    let event_section = document.createElement('section');
    event_section.id = "event_section";
    let h2 = document.createElement('h2');
    h2.innerHTML = "Events";
    home_block.appendChild(event_section);
    event_section.appendChild(h2);

} 
        
const viewDataCurrentWeatherSection = () =>{
    let weather_section = document.createElement('section');
    weather_section.id = "weather_section";
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

const viewDataForecastSection = () =>{
    let forecast_section = document.createElement('section');
    forecast_section.id = "forecast_section";
    let h2 = document.createElement('h2');
    h2.innerHTML = "Forecast";
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    // for (let i = 0; i < 3; i++) {
    //     let li_temp = document.createElement('li');
    //     li_temp.innerHTML = forecast.list[i].main.temp;
    //     ul.appendChild(li_temp);
        
    // }
    let li_today = document.createElement('li');
    li_today.innerHTML = `Today: ${forecast.list[0].main.temp}`;
    let li_tommorow = document.createElement('li');
    li_tommorow.innerHTML = `${(new Date(forecast.list[6].dt_txt)).toString().slice(0,3)} : ${forecast.list[6].main.temp}`;
    let li_dayaftertommorow = document.createElement('li');
    li_dayaftertommorow.innerHTML = `${(new Date(forecast.list[14].dt_txt)).toString().slice(0,3)} : ${forecast.list[14].main.temp}`;
    div.appendChild(ul);
    ul.appendChild(li_today);
    ul.appendChild(li_tommorow);
    ul.appendChild(li_dayaftertommorow);
    forecast_section.appendChild(h2);
    forecast_section.appendChild(div);
    home_block.appendChild(forecast_section);

}

const showMembersSection = async () => {
    let members_section = document.createElement('section');
    members_section.id = "members_section";
    let membersArray = await getDataMembers();
    let membersSilverGold = [];
        for (let i of membersArray ){
            if (i.membership_level == 2 || i.membership_level == 3 ){
            membersSilverGold.push(i);
        }
    
    }
    console.log(membersSilverGold);
    let randomArray = [];
    console.log(randomArray.length);
    while (randomArray.length < 3){
            let index = Math.floor(Math.random() * membersSilverGold.length);
            if(randomArray.includes(membersSilverGold[index])){
                index = Math.floor(Math.random() * membersSilverGold.length);
            }
            else{
                randomArray.push(membersSilverGold[index]);
                console.log(randomArray.length);
                }

            }
        
    console.log(membersSilverGold);
    home_block.appendChild(members_section)
    createDataCard(randomArray,members_section);
}

// console.log(weather);
// console.log(forecast);
//console.log(randomArray);


getDataImgSection();
getEventsSection();
viewDataCurrentWeatherSection();
viewDataForecastSection();
showMembersSection();
