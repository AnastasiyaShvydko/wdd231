import { getOrderInfo } from "./addToCart.js";



export const showOrder = (itemsList,block) => {
//let itemsList =  getOrderInfo();
for(let i of itemsList ){
    let p = document.createElement('p');
    p.innerHTML = i;
    block.appendChild(p);
}
}