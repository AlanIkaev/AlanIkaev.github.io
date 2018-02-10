var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".mobile-menu");

burger.onclick = function(){
  menu.classList.toggle("mobile-menu--open");

}