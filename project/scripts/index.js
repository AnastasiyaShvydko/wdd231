import { showOrder } from "./showOrder.js";
import { getOrderInfo } from "./addToCart.js";
const mainnav = document.getElementById('animated');
const humbutton = document.getElementById('menu');
const contact = document.getElementById('contact');
const home = document.getElementById('home');
const products = document.getElementById('products');
const cart = document.getElementById('cart');


humbutton.addEventListener('click', ()=>{
    humbutton.classList.toggle('show');
    mainnav.classList.toggle('show');
    
})


const showCart = () =>{
    let itemsList =  getOrderInfo();
    let dialog = document.createElement('dialog');
    dialog.id = "cart_info";
    showOrder(itemsList,dialog);
    cart.addEventListener('click', ()=>{
        // home_page();
        dialog.showModal();
        
     });
    
    let button = document.createElement('button');
    button.innerHTML = 'Close';
    button.addEventListener('click', ()=>{
        dialog.close();
    })
    dialog.appendChild(button);
    document.body.appendChild(dialog);
  
   
}



home.addEventListener('click', ()=>{
    // home_page();
    home.href = "index.html";
   
 });


 contact.addEventListener('click', ()=>{
  
    contact.href = "contact.html";
    
    
   

});


products.addEventListener('click', ()=>{
    products.href = "products.html";
});





if(location.pathname == "/project/index.html"){
    home.classList.toggle('active');
}
else if (location.pathname == "/project/contact.html") {
    contact.classList.toggle('active');
} 
else if (location.pathname == "/project/products.html") {
    products.classList.toggle('active');
} 

showCart();
console.log(location.pathname)