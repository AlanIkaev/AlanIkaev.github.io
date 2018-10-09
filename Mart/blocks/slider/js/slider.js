$(document).ready(function(){
  $('.slider').slick({
  	arrows: true,
  	mobileFirst: true,
  	nextArrow:'<div class="slider-button left"><div class="slider-button__arrow right"></div></div>',
	prevArrow:'<div class="slider-button right"><div class="slider-button__arrow left"></div></div>',
	responsive: [
		{
			breakpoint: 300,
			settings: {
				dots: true,
				arrows: false
			}
		},
		{
			breakpoint: 1023,
			settings: {
				dots: false,
				arrows: true
			}
		}
	]
  });
});