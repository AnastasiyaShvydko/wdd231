const wddLink = document.getElementById('wdd');
const cseLink = document.getElementById('cse');
const allLink = document.getElementById('all');
const classesList = document.getElementById('classes_list');
const humbutton = document.querySelector("#menu");
const mainnav = document.querySelector(".navigation");
const total_credit = document.getElementById('total_credit');
const credits = [];
const dialog_button = document.querySelector(".dialog_button");

const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: [
          'HTML',
          'CSS'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
      technology: [
          'C#'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: false
  }
]

allLink.addEventListener('click', () =>{
    classesList.innerHTML = "";
    show(courses);
});

wddLink.addEventListener('click', () =>{
    classesList.innerHTML = "";
    let wddArray = courses.filter(element => element.subject == "WDD");
    show(wddArray);
});

cseLink.addEventListener('click', () =>{
    classesList.innerHTML = "";
    let cseArray = courses.filter(element => element.subject == "CSE");
    show(cseArray);
});


const show = (array) =>{
array.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML = `${element.subject} ${element.number}`;
    let dialog = document.createElement('dialog');
    let dialog_button = document.createElement('button');
    dialog_button.innerHTML = "Close";
    dialog_button.classList = "dialog_button";
   
    
    let dialog_p = document.createElement('p');
    dialog_p.innerHTML = element.description;
    li.addEventListener("click", () => {
        dialog.showModal();
      });
    
dialog_button.addEventListener("click", () => {
    console.log("hi")
    dialog.close();
  });
//     <dialog>
//   <button autofocus>Close</button>
//   <p>This modal dialog has a groovy backdrop!</p>
// </dialog>
// <button>Show the dialog</button>;

    if(element.completed == true){
        li.className = "completed";
        credits.push(element.credits);

    }
    else{
        li.className = "incompleted"
    }
    classesList.appendChild(li);
    //important to add dialog to the document.body
    document.body.appendChild(dialog);
    dialog.appendChild(dialog_button);
    dialog.appendChild(dialog_p);
   
});
}

humbutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    humbutton.classList.toggle('show');
})


const countTotal = (total, value) => {
  return total+value;
 }





console.log(credits);

show(courses);


total_credit.innerHTML = `Total credit: ${credits.reduce(countTotal)}`;

