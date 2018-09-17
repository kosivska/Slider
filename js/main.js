'use strict';

$(document).ready(function() {
		$('.carousel').slick({
			centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
   prevArrow: '<img class="carousel__arrow--prev" src="./img/prevArrow.png">',
        nextArrow: '<img class="carousel__arrow--next" src="./img/nextArrow.png">',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
			
		});
	});