const currentUrl = location.href;
console.log(currentUrl);
const everything = currentUrl.split('?');

let formData = everything[1].split('&');

const show = (cup) =>{
    formData.forEach(element =>{
        if(element.startsWith(cup)){
            console.log(element);
            console.log(element.split('=')[1])
        }
    } )
    

}


// formData.forEach(element =>{
//     show(element.split('='));
// })




console.log(formData);
show('phone')