var burger = document.querySelector(".burger-menu");
var menu = document.querySelector(".mobile-menu");

burger.onclick = function(){
  menu.classList.toggle("mobile-menu--open");
  burger.classList.toggle("open");
}