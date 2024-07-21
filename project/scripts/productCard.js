import { recordOrderInfo, getOrderInfo } from "./addToCart.js";
import { showOrder } from "./showOrder.js";
const number_of_items = document.getElementById('number_of_items');
let cart_info = document.getElementById('cart_info');



const addToOrder = (item,price) =>{
 
 let orderString = `${item}: $${price};`;
 recordOrderInfo(orderString);
 console.log(cart_info);
 let itemsList =  getOrderInfo();

number_of_items.innerHTML = itemsList.length - 1;
showOrder(itemsList,cart_info);

}

export const createProductCard = async (productList,priceList, block)=>{
    let products_div = document.createElement('div');
    products_div.id = 'products_div';
    //let productList = await getData();
    for(let i of productList){
        for (let p of priceList){
            if (i.strMeal === p.name){
        let product_card = document.createElement('div');
        product_card.className = "product_card";
        product_card.innerHTML = 
        `<h2>${i.strMeal}</h2>
        <img src="${i.strMealThumb}" width="200" height="150" alt="cake" load="lazy">
        <p class="price">Price:$${p.price}</p>`

        let dialog = document.createElement('dialog');
        dialog.innerHTML = `
        <h3>${i.strMeal}</h3>
        ${i.strIngredient1}<br>
        ${i.strIngredient2}<br>
        ${i.strIngredient3}<br>
        ${i.strIngredient4}<br>
        ${i.strIngredient5}<br>
        ${i.strIngredient6}<br>
        ${i.strIngredient7}<br>
        ${i.strIngredient8}<br>` 

        let buttons_div = document.createElement('div');
        buttons_div.id = "buttons_div";

        let dialog_button = document.createElement('button');
        dialog_button.innerHTML = 'Details...';
        dialog_button.className = 'dialog_button';
        dialog_button.addEventListener('click', ()=>{
                dialog.showModal();
            })

            let dialog_close_button = document.createElement('button');
            dialog_close_button.innerHTML = 'Close';
            dialog_close_button.className = 'dialog_close_button';
            dialog_close_button.addEventListener('click', ()=>{
                dialog.close();})


                let add_to_cart_button = document.createElement('button');
                add_to_cart_button.innerHTML = 'Add To Cart';
                add_to_cart_button.className = 'add_to_cart_button';
                add_to_cart_button.addEventListener('click', ()=>{
                    
                    addToOrder(i.strMeal,p.price);})

        products_div.appendChild(product_card);
        
        product_card.appendChild(buttons_div);
        
        
        buttons_div.appendChild(add_to_cart_button);
        buttons_div.appendChild(dialog_button);

        document.body.appendChild(dialog);
        dialog.appendChild(dialog_close_button);
                }
    };
}
    
    block.appendChild(products_div);

}

getOrderInfo();