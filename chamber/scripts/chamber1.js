import {api_connection_forecast,api_connection_weather} from './weather.js';


const directory_block = document.getElementById('directory_block');
const home_block = document.getElementById('home_block');
const humbutton = document.getElementById('menu');
const mainnav = document.getElementById('animated');
const directory = document.getElementById('directory');
const home = document.getElementById('home');
const join = document.getElementById('join');
const discover = document.getElementById('discover');


directory.addEventListener('click', ()=>{
  
    directory.href = "directory.html";
    
   

});
home.addEventListener('click', ()=>{
    home_page();
});

discover.addEventListener('click', ()=>{
    discover_page();
});

join.addEventListener('click', ()=>{
    join_page();
});



const main = () => { 

    //home_page(); 
  
    
    
}


const page_list = [directory,home,discover,join];



humbutton.addEventListener('click', ()=>{
    humbutton.classList.toggle('show');
    mainnav.classList.toggle('show');
    
})



const getDataDirectory = async ()=>{
    
    let data = await fetch('data/members.json');
    let jsonData = await data.json()
   // console.log(jsonData);
    return jsonData;
   
}

const viewDataDirectory = async ()=>{
    let data = await getDataDirectory();
    //console.log(data[0])
    // let myArray = Array.from(data);
    // myArray.forEach(element => {
    //     console.log(element.name);
    // });
    for(let i of data){
        let div = document.createElement('div');
        div.className = "card";
        
        let h2 = document.createElement('h2');
        h2.innerHTML = i.name;
        let img = document.createElement('img');
        img.src = i.icon;
        img.alt = "company logo";
        
        let ul = document.createElement('ul');
        
       

        let li_1 = document.createElement('li');
        li_1.innerHTML = `<span class="lable">EMAIL:</span> ${i.email}`;

        let li_2 = document.createElement('li');
        li_2.innerHTML = `<span class="lable">PHONE:</span> ${i.phone_number}`;

        let li_3 = document.createElement('li');
        li_3.innerHTML = `<span class="lable">URL:</span> ${i.website_url}`;

        let li_4 = document.createElement('li');
        li_4.innerHTML = i.membership_level;

        let li_5 = document.createElement('li');
        li_5.innerHTML = i.established;

       
        directory_block.appendChild(div);
        div.appendChild(h2)
        div.appendChild(img);
        div.appendChild(ul);
        ul.appendChild(li_1);
        ul.appendChild(li_2);
        ul.appendChild(li_3);
        ul.appendChild(li_4);
        ul.appendChild(li_5);
        
        
        console.log(i.name);
    }
}

const getDataHome = () =>{
    let img = document.createElement('img');
    img.src = "images/main_img.jpg";
    home_block.appendChild(img);
}

const viewDataHome = () =>{
    
}


const directory_page = () =>{
    try {
        home_block.innerHTML = "";
        directory_block.innerHTML = "";
        getDataDirectory();
        viewDataDirectory();
        for (let i of page_list ){
            if (i.id == "directory"){
                i.classList.add('active')
                //i.href = "directory.html";
                
            }
            else(
                i.classList.remove('active')
            )
            

            
        }
        
      } catch (error) {
        console.error(error);
        
    }
}

const join_page = () =>{
    try {
        directory_block.innerHTML = "";
        home_block.innerHTML = "";
        for (let i of page_list ){
            if (i.id == "join"){
                i.classList.toggle('active');
                i.href = "join.html";
            }
            else(
                i.classList.remove('active')
            )
           

            
        }
        getData();
        viewData();
      } catch (error) {
        console.error(error);
        
    }
}


const discover_page = () =>{
    try {
        directory_block.innerHTML = "";
        home_block.innerHTML = "";
        for (let i of page_list ){
            if (i.id == "discover"){
                i.classList.toggle('active')
                i.href = "discover.html";
            }
            else(
                i.classList.remove('active')
            )

            
        }
        getDataDirectory();
        viewDataDirectory();
      } catch (error) {
        console.error(error);
        
    }
}
const home_page = () => {
    try {
    directory_block.innerHTML = "";
    home_block.innerHTML = "";

    for (let i of page_list ){
        if (i.id == "home"){
            i.classList.toggle('active')
            //i.href = "index.html";
            
        }
        else(
            i.classList.remove('active')
        )
        //getDataDirectory();
        //viewDataDirectory();

        
    }
    
        getDataHome();
        api_connection_forecast();
        api_connection_weather();
    }
    catch{

    }
}

//home_page();
console.log(location.href)
//main();