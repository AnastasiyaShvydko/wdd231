const humbutton = document.getElementById('menu');
const mainnav = document.getElementById('animated');
const home_block = document.getElementById('home_block');
import { getProducts } from "./products_data.js";



humbutton.addEventListener('click', ()=>{
    humbutton.classList.toggle('show');
    mainnav.classList.toggle('show');
    
})

const createProductCard = async ()=>{
    let products_div = document.createElement('div');
    products_div.id = 'products_div';
    let productList = await getProducts();
    for(let i of productList){
        let product_info_div = document.createElement('div');
        product_info_div.innerHTML = 
        `<h3>${i.name}</h3>`
        products_div.appendChild(product_info_div);

    };
    
    home_block.appendChild(products_div);

}

createProductCard()
