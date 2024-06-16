const wddLink = document.getElementById('wdd');
const cseLink = document.getElementById('cse');
const allLink = document.getElementById('all');
const classesList = document.getElementById('classes_list');
const humbutton = document.querySelector("#menu");
const mainnav = document.querySelector(".navigation");

const classesArray = [
    { name: "CSE 110",
      completed: true

    },
    { name: "WDD 130",
      completed: true

    },
    { name: "CSE 111",
      completed: true

    },
    { name: "CSE 210",
      completed: true

    },
    { name: "WDD 131",
      completed: true

    },
    { name: "WDD 231",
      completed: false

    },
]

allLink.addEventListener('click', () =>{
    classesList.innerHTML = "";
    show(classesArray);
});

wddLink.addEventListener('click', () =>{
    classesList.innerHTML = "";
    let wddArray = classesArray.filter(element => element.name.slice(0,3) == "WDD");
    show(wddArray);
});

cseLink.addEventListener('click', () =>{
    classesList.innerHTML = "";
    let cseArray = classesArray.filter(element => element.name.slice(0,3) == "CSE");
    show(cseArray);
});


const show = (array) =>{
array.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML = element.name;
    if(element.completed == true){
        li.className = "completed"
    }
    else{
        li.className = "incompleted"
    }
    classesList.appendChild(li);
    
});
}

humbutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    humbutton.classList.toggle('show');
})

