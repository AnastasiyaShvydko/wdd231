import { getOrderInfo } from "./addToCart.js";



export const showOrder = async (itemsList,block) => {
//let itemsList =  getOrderInfo();
for(let i of await itemsList ){
    let p = document.createElement('p');
    p.innerHTML = i;
    block.appendChild(p);
}
}