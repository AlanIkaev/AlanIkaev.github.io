var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".mobile__menu");

burger.onclick = function(){

  menu.classList.toggle("mobile__menu--open");

}