const number_of_items = document.getElementById('number_of_items');
import { getOrderInfo } from "./addToCart.js";

let itemsList =  getOrderInfo();
console.log(itemsList);

if(itemsList.length == 0){
    number_of_items.innerHTML = "0"
}
else{
    let number = itemsList.length - 1;
    number_of_items.innerHTML = number;
}
