$(document).ready(function(){

    $('.slider').slick({
	    arrows: true,
	  	mobileFirst: true,
	  	slidesToShow: 1,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
	  	lazyLoad: 'progressive',
	  	nextArrow: '<div class="slider-button right"><span class="arrow right"></span></div>',
	  	prevArrow: '<div class="slider-button left"><span class="arrow left"></span></div>',
	  	responsive:[
	  		{
	  			breakpoint: 300,
	  			settings:{
	  				dots:true,
	  				arrows: false
	  			}
	  		},
	  		{
	  			breakpoint: 1000,
	  			settings:{
	  				dots: true,
	  				arrows: true
	  			}
	  		}
	  	]
  	});

	$('.sets-slider').slick({
	  slidesToShow: 1,
	  arrows: true,
	  dots: true,
	  mobileFirst: true,
	  variableWidth: true,
	  nextArrow: '<div class="slider-arrow right"><span></span><span></span><span></span><span></span><span></span></div>',
	  prevArrow: '<div class="slider-arrow left"><span></span><span></span><span></span><span></span><span></span></div>',
	  responsive:[
	  	 {
	  	 	breakpoint:300,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 		centerMode: true,
	  	 		dots: false
	  	 	}
	  	 },

	  	 {
	  	 	breakpoint: 750,
	  	 	settings:{
	  	 		slidesToShow: 3,
	  	 		centerMode: false
	  	 	}
	  	 },
	  	 {
	  	 	breakpoint: 1170,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 	}
	  	 }
	  ]
	});

	$('.rolls-slider').slick({
	  slidesToShow: 1,
	  arrows: false,
	  dots: true,
	  mobileFirst: true,
	  variableWidth: true,
	  responsive:[
	  	 {
	  	 	breakpoint:300,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 		centerMode: true,
	  	 		dots: false
	  	 	}
	  	 },

	  	 {
	  	 	breakpoint: 750,
	  	 	settings:{
	  	 		slidesToShow: 3,
	  	 		centerMode: false
	  	 	}
	  	 },
	  	 {
	  	 	breakpoint: 1170,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 	}
	  	 }
	  ]
	});

	$('.pizza-slider').slick({
	  slidesToShow: 1,
	  arrows: false,
	  dots: true,
	  mobileFirst: true,
	  variableWidth: true,
	  responsive:[
	  	 {
	  	 	breakpoint:300,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 		centerMode: true,
	  	 		dots: false
	  	 	}
	  	 },

	  	 {
	  	 	breakpoint: 750,
	  	 	settings:{
	  	 		slidesToShow: 3,
	  	 		centerMode: false
	  	 	}
	  	 },
	  	 {
	  	 	breakpoint: 1170,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 	}
	  	 }
	  ]
	});

	$('.wok-slider').slick({
	  slidesToShow: 1,
	  arrows: false,
	  dots: true,
	  mobileFirst: true,
	  variableWidth: true,
	  responsive:[
	  	 {
	  	 	breakpoint:300,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 		centerMode: true,
	  	 		dots: false
	  	 	}
	  	 },

	  	 {
	  	 	breakpoint: 750,
	  	 	settings:{
	  	 		slidesToShow: 3,
	  	 		centerMode: false
	  	 	}
	  	 },
	  	 {
	  	 	breakpoint: 1170,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 	}
	  	 }
	  ]
	});

	$('.offers-slider').slick({
	  slidesToShow: 1,
	  arrows: false,
	  dots: true,
	  mobileFirst: true,
	  variableWidth: true,
	  responsive:[
	  	 {
	  	 	breakpoint:300,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 		centerMode: true,
	  	 		dots: false
	  	 	}
	  	 },

	  	 {
	  	 	breakpoint: 750,
	  	 	settings:{
	  	 		slidesToShow: 3,
	  	 		centerMode: false
	  	 	}
	  	 },
	  	 {
	  	 	breakpoint: 1170,
	  	 	settings:{
	  	 		slidesToShow: 1,
	  	 	}
	  	 }
	  ]
	});
});