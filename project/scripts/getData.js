export const getData = async ()=>{

const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake',{
        method: "GET",
        
      });
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        let data = await response.json();
        console.log(data);
        return data.meals;
    }
}

// const getForecast = async () =>{
//     const city = "Vaughan"
//     const apiKey ="WsNh4ewn9JOoxgu0wUBk9Q==5jCzODqPJVZIWKMI";
//     const response = await fetch(`https://api.api-ninjas.com/v1/weather?city= + ${city}`,{
//         method: "GET",
//         headers: {
            
//          'X-Api-Key': `${apiKey}`
    
//         }
//       });
//     if (response.ok) {
//         // the API will send us JSON...but we have to convert the response before we can use it
//         // .json() also returns a promise...so we await it as well.
//         forecast = await response.json();
//         return forecast;
//     }
// }
getData();