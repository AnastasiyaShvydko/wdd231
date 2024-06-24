const block = document.getElementById('block');
const humbutton = document.getElementById('menu');
const mainnav = document.getElementById('animated');
const directory = document.getElementById('directory');

humbutton.addEventListener('click', ()=>{
    humbutton.classList.toggle('show');
    mainnav.classList.toggle('show');
    
})

const getData = async ()=>{
    
    let data = await fetch('data/members.json');
    let jsonData = await data.json()
   // console.log(jsonData);
    return jsonData;
   
}

const viewData = async ()=>{
    let data = await getData();
    //console.log(data[0])
    // let myArray = Array.from(data);
    // myArray.forEach(element => {
    //     console.log(element.name);
    // });
    for(let i of data){
        let div = document.createElement('div');
        div.className = "card";
        
        let h2 = document.createElement('h2');
        h2.innerHTML = i.name;
        let img = document.createElement('img');
        img.src = i.icon;
        
        let ul = document.createElement('ul');
        
       

        let li_1 = document.createElement('li');
        li_1.innerHTML = `<span class="lable">EMAIL:</span> ${i.email}`;

        let li_2 = document.createElement('li');
        li_2.innerHTML = `<span class="lable">PHONE:</span> ${i.phone_number}`;

        let li_3 = document.createElement('li');
        li_3.innerHTML = `<span class="lable">URL:</span> ${i.website_url}`;

        let li_4 = document.createElement('li');
        li_4.innerHTML = i.membership_level;

        let li_5 = document.createElement('li');
        li_5.innerHTML = i.established;

       
        block.appendChild(div);
        div.appendChild(h2)
        div.appendChild(img);
        div.appendChild(ul);
        ul.appendChild(li_1);
        ul.appendChild(li_2);
        ul.appendChild(li_3);
        ul.appendChild(li_4);
        ul.appendChild(li_5);
        
        
        console.log(i.name);
    }
}
const main = () =>{
    try {
        directory.classList.add('active');
        getData();
        viewData();
      } catch (error) {
        console.error(error);
        
    }
}

main();