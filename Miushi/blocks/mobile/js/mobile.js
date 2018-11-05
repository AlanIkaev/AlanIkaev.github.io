var burger = document.querySelector(".mobile__menu-burger");
var mobileMenu = document.querySelector(".mobile__menu");

burger.addEventListener("click", function(){
	mobileMenu.classList.toggle("active");
	burger.classList.toggle("open");
})