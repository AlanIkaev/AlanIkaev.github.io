$(document).ready(function(){
  $('.collection').slick({
  	arrows: false,
  	dots: true,
    autoplay: true,
  	mobileFirst: true,
  	responsive: [
  		{
  			breakpoint: 320,
  			settings: "slick"
  		},
  		{
  			breakpoint: 768,
  			settings: {
  				slidesToShow: 2,
  				fade: false
  			}
  		},
  		{
  			breakpoint: 1023,
  			settings:{
  				slidesToShow: 3,
  				fade: false
  			}
  		},
  		{
  			breakpoint: 1399,
  			settings: "unslick"
  		}
  	]
  });
});