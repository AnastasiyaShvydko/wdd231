// import Calendar from "/color-calendar/dist/index";

// const discover_block = document.getElementById('discover_block');

// let calendar = new Calendar();

// discover_block.innerHTML = calendar;
const event_section = document.getElementById('discover_sidebar_event_section');
const greeting_section = document.getElementById('discover_sidebar_greeting_section');
const MY_ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzYmQwZmRiYzAwMTE2MGNlYzQxM2YyNDhhMWUwNzhkNCIsImp0aSI6IjJiNjRmOWNhNmEzM2Q4OGIwZmZjNGZiYWQ4ZDNhMzI5Y2IzNDU2N2M1NmVkZDEwNTRiOTNkOTUyMmNiMDNhNzZkMGEyM2U3YjVmODVkMTNhIiwiaWF0IjoxNzIwNjMxMTk1LjA4Nzk5NiwibmJmIjoxNzIwNjMxMTk1LjA4ODAwMSwiZXhwIjozMzI3NzUzOTk5NS4wODU3NDcsInN1YiI6Ijc2MDQ2NTE2IiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.HV8OupwgB3v4b2pfNAqlYHVs-Pjk2t5euQbGANVLHNjn4ACTdUtRhGggF_iVOHDKjEvxeV1xVzntnlSvCyKxdwXRSs_jqtXdYtaylx9tupdnmKXnIrQMlNDWD7xX591K0e7KAYW2meni5sQIbzX0zi1S4Qj5SnVwap3MrS1Dfh4ZT3cnXBqmiiFQdoySw9vhi5X2mesD1Py4kIsWPDNMGdsDhX2FJHDSgD8zqhW83G5pWg41kpOgVl9s3LepZhyCUdY2CxP2nfZ2svFXkxKuOAUuvZKKP5BoGN_fuKzZAgP-hPdjXiiKUDvjRuxPBNndRTj1Xqlrt3PZeXLLixVruo8dnzqDxmYXgt9tFMLYAlmYCCAjqLgXuEaKmApVGZae0dBIsr1lvdB3HckTfzFGPfaCmUlMl9Pmf2oEGlHIledjICpa6001aoeitX79KBWnv1Kea3gSxBKc301LMv6T5sjiCBcl5ekLYTafOLDWnbBZy3vkaTGGBuwD83HMeeLK--7m6yIDgiB7lLcD3YoNehGh6oc8C040gZK9O3iC4rcjU7M8qZ2XKofuzYOYfkhUFI2oY97nzkaqVUUR7Ssc5vCnxwa1LIn8oUI1GKitURL_B8X0MPMlDzOMrfUv9TtaHoDQquHa9nS4FDEzEMjYAl29q8Oxa8yG1DI_kdU8q-U'


let count_visits = ()=>{
    let visit = new Date(Date.now());
    //localStorage.clear();
    let visits = localStorage.getItem('visits');
    //let visits = '13/07/2024';
    let h2 = document.createElement('h2');
    greeting_section.appendChild(h2);
    h2.innerHTML = "Greet";
    let p = document.createElement('p');
    greeting_section.appendChild(p);
    let days = Math.floor(Math.abs(new Date(Date.now())- new Date(visits))/(1000*3600*24));
    if(visits == null){
        
        p.innerHTML= 'Welcome! Let us know if you have any questions.';
        localStorage.setItem('visits', visit);


    }
    else if(days == 0 ){
        p.innerHTML= 'Back so soon! Awesome!';
        localStorage.setItem('visits', visit);
    }
    else{
        if(days == 1){
            p.innerHTML = `You last visited ${days} day ago.`;
        }
        // let days = Math.abs(new Date(Date.now())- new Date(visits)) ;
        // console.log(days/(1000*3600*24));
        // console.log(new Date(Date.now()));
        // console.log(new Date(visits));
        else{
            p.innerHTML = `You last visited ${days} days ago.`;
        }
        localStorage.setItem('visits', visit);
    }
// console.log(new Date(Date.now()).toLocaleDateString());
// console.log(visits);

}


const getEvent = async () =>{
let today = new Date();
let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2,'0');
let day = String(today.getDate()).padStart(2,'0');
let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;

let response = await fetch( url,
    {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`,
            'Api-User-Agent': 'WDD231 (shv20001@gmail.com)'
        }
    }
);
let resp = await response.json()
//let list = resp.onthisday

    
    .catch(console.error)
    //console.log(resp.);
   return resp.onthisday;

}
document.addEventListener('DOMContentLoaded', function() {
    count_visits();
    // Your code goes here
  });


const randomEvent = async ()=>{
    let data = await getEvent();
    
    let eventArray = Array.from(data);
    let index = Math.floor(Math.random() * eventArray.length);
    console.log(data);
    let h2 = document.createElement('h2');
    event_section.appendChild(h2)
    h2.innerHTML = "This Day in the History";
    let p = document.createElement('p');
    event_section.appendChild(p)
    p.innerHTML = eventArray[index].text;
}
  
randomEvent();
