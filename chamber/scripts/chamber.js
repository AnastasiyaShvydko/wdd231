const block = document.getElementById('block');
const humbutton = document.getElementById('menu');
const mainnav = document.getElementById('animated');

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
        let img = document.createElement('img');
        img.src = i.icon;
        
        let ul = document.createElement('ul');
        
        let li_1 = document.createElement('li');
        li_1.innerHTML = i.name;

        let li_2 = document.createElement('li');
        li_2.innerHTML = i.address;

        let li_3 = document.createElement('li');
        li_3.innerHTML = i.phone_number;

        let li_4 = document.createElement('li');
        li_4.innerHTML = i.website_url;

       

        let li_5 = document.createElement('li');
        li_5.innerHTML = i.membership_level;

        let li_6 = document.createElement('li');
        li_6.innerHTML = i.established;

       
        block.appendChild(div);
        div.appendChild(img);
        div.appendChild(ul);
        ul.appendChild(li_1);
        ul.appendChild(li_2);
        ul.appendChild(li_3);
        ul.appendChild(li_4);
        ul.appendChild(li_5);
        ul.appendChild(li_6);
        
        console.log(i.name);
    }
}
const main = () =>{
    try {
        getData();
        viewData();
      } catch (error) {
        console.error(error);
        
    }
}

main();