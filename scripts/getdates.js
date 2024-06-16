
let currentYear = new Date().getFullYear();
let date_element = document.getElementById('currentyear');
date_element.innerHTML = currentYear;

let lastModified = document.lastModified;
let lastModified_element = document.getElementById('lastModified');
lastModified_element.innerHTML = lastModified;