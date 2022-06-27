const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const aboutbtn = document.querySelector("#aboutbtn");
const skillsbtn = document.querySelector("#skillsbtn");
const workbtn = document.querySelector("#workbtn");
const contactbtn = document.querySelector("#contactbtn");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
aboutbtn.addEventListener("click", toggleMenu);
skillsbtn.addEventListener("click", toggleMenu);
workbtn.addEventListener("click", toggleMenu);
contactbtn.addEventListener("click", toggleMenu);
