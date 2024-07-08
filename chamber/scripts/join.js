const dialog_button = document.getElementById('dialog_button');

let dialog = document.createElement('dialog');
let dialog_close_button = document.createElement('button');
dialog_close_button.innerHTML = "Close";

let dialog_p = document.createElement('p');
dialog_p.innerHTML = `
<p>NoN-Profit Cost:FREE</p>
<p>Bronze Cost:$100</p>
<p>Silver Cost:$200</p>
<p>Gold Cost:$300</p>`;

document.body.appendChild(dialog);
dialog.appendChild(dialog_p);
dialog.appendChild(dialog_close_button);

dialog_button.addEventListener('click', ()=>{
    dialog.showModal();
})

dialog_close_button.addEventListener('click', ()=>{
    dialog.close();
})