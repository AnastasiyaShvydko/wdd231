const number_of_items = document.getElementById('number_of_items');
import { getOrderInfo } from "./addToCart.js";

let itemsList =  getOrderInfo();
console.log(itemsList);

number_of_items.innerHTML = itemsList.length - 1;