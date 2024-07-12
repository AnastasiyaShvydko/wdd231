const directory = document.getElementById('directory');
const home = document.getElementById('home');
const join = document.getElementById('join');
const discover = document.getElementById('discover');
const humbutton = document.getElementById('menu');
const mainnav = document.getElementById('animated');

const page_list = [directory,home,discover,join];


home.addEventListener('click', ()=>{
    // home_page();
    home.href = "index.html";
   
 });


directory.addEventListener('click', ()=>{
  
    directory.href = "directory.html";
    
    
   

});


discover.addEventListener('click', ()=>{
    discover.href = "discover.html";
});

join.addEventListener('click', ()=>{
    join.href = "join.html";
});

humbutton.addEventListener('click', ()=>{
    humbutton.classList.toggle('show');
    mainnav.classList.toggle('show');
    
})

if(location.pathname == "/chamber/index.html"){
    home.classList.toggle('active');
}
else if (location.pathname == "/chamber/directory.html") {
    directory.classList.toggle('active');
} 
else if (location.pathname == "/chamber/discover.html") {
    discover.classList.toggle('active');
} 
else if (location.pathname == "/chamber/join.html"){
    join.classList.toggle('active');
} 

console.log(location.pathname)