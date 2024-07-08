const currentUrl = location.href;
const thanks_block = document.getElementById('thanks_block')

console.log(currentUrl);
const everything = currentUrl.split('?');

let formData = everything[1].split('&');

let ul = document.createElement('ul');
let arrayElements = []
const show = (cup) =>{
    formData.forEach(element =>{
        if(element.startsWith(cup)){
            //console.log(element);
           let data = element.split('=')[1].replace("%40","@");
           let li = document.createElement('li')
           li.innerHTML = `${cup}: ${data}`;
           ul.appendChild(li);
          
           
           
        }
    } )
    

}

formData.forEach(element =>{
    let cup = element.split('=')[0];
    console.log(cup);
    
    show(cup);
  
   
})

thanks_block.appendChild(ul);