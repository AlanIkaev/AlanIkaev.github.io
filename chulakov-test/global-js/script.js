const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".sidebar__nav");

burger.onclick = function(){
	menu.classList.toggle("sidebar__nav--active");
}