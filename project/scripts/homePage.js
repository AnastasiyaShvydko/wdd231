// const humbutton = document.getElementById('menu');
// const mainnav = document.getElementById('animated');
// const home_block = document.getElementById('home_block');
//const dialog_button = document.querySelectorAll('.dialog_button');
const dialog_close_button = document.querySelectorAll('.dialog_close_button');
const dialog = document.querySelectorAll('.dialog');
import { getData } from "./getData.js";
import { createProductCard } from "./productCard.js";
import { getPriceData } from "./getPriceData.js";

const procuctList = await getData();
for(let i of procuctList){
    console.log(i.strMeal)
}

for(let i of await getPriceData()){
    console.log(i.price)
}

console.log(await getPriceData())

// humbutton.addEventListener('click', ()=>{
//     humbutton.classList.toggle('show');
//     mainnav.classList.toggle('show');
    
// })


// dialog_button.addEventListener('click', ()=>{
//     dialog.showModal();
// })

// dialog_close_button.addEventListener('click', ()=>{
//     dialog.close();
// 
//console.log(dialog_button)

const getRandomList = (regList)=>{
    let randomArray = [];
    console.log(randomArray.length);
    while (randomArray.length < 3){
        let index = Math.floor(Math.random() * regList.length);
        console.log(index)
        if(randomArray.includes(regList[index])){
            index = Math.floor(Math.random() * regList.length);
        }
        else{
            randomArray.push(regList[index]);
            console.log(randomArray.length);
            }

        }
        return randomArray;
    }


createProductCard(getRandomList(procuctList),await getPriceData(),home_block);
