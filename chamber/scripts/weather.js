//API connection


const apiKey = '8478757aaca9060291f4d7b7b2edc67d';
const api_connection_geo = async () =>{
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Vaughan&limit=1&appid=${apiKey}`
      );
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        let geo_data = await response.json();
        console.log(geo_data)
        return geo_data;
    }

}



export const api_connection_forecast = async () =>{
    let geo_data = await api_connection_geo();
    let lat;
    let lon;
    for (let i of geo_data){
        lat = await i.lat;
        lon = await i.lon;
    }
   

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        let forecast = await response.json();
        console.log(forecast)
        return forecast;
    }


    
}

export const api_connection_weather = async () =>{
    let geo_data = await api_connection_geo();
    let lat;
    let lon;
    for (let i of geo_data){
        lat = await i.lat;
        lon = await i.lon;
    }
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        let weather = await response.json();
        console.log(weather)
        return weather;
    }


}
