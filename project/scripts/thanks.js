
const currentUrl = location.href;
const thanks_block = document.getElementById('thanks_block');

console.log(currentUrl);
const everything = currentUrl.split('?');

let formData = everything[1].split('&');

let userName = formData[0].split('=')[1]
console.log(userName)

let p = document.createElement('p');
p.innerHTML = `Thanks for sending us a message ${userName}!<br> 
We will contact you back soon!`;
thanks_block.appendChild(p)