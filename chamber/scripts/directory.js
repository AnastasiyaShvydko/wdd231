import {getDataMembers} from './getMemberInfo.js'
import { createDataCard } from './card.js';


const directory_block = document.getElementById('directory_block');
const btn_block = document.getElementById('btn_block');
const data = await getDataMembers();





 
const viewDataDirectory = async ()=>{
    directory_block.className = "grid";
    let btnGrid = document.createElement('button');
    btnGrid.innerHTML = "Grid/List";
    btn_block.appendChild(btnGrid);
    btnGrid.addEventListener('click', ()=>{
        directory_block.classList.toggle('list');
        directory_block.classList.toggle('grid');
    } )
    createDataCard(data,directory_block);

}




console.log(location)

viewDataDirectory();