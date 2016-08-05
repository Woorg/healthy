import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'owl-carousel-2-beta';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widget';
// import 'jquery-ui/ui/effect';
// import 'jquery-ui/ui/widgets/mouse';
// import 'jquery-ui/ui/widgets/button';
// import 'jquery-ui/ui/widgets/accordion';
// import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/ui/widgets/spinner';


$(() => {
	svg4everybody();

	// owlCarousel
	function carouselOwl() {
		const owlcarousel = $('.carousel-owl__list');
		owlcarousel.owlCarousel({
			margin: 0,
			autoWidth: false,
			items: 3,
			loop: true,
			center: true,
			stagePadding: 0,
			dots: false,
			nav: true,
			responsive: {
				320: {
					items: 2
				},
				768: {
					items: 2
				},
				1000:{
					items: 3
				}
			}

		});
		console.log('owlCarouselLoaded');
	}

		// Spinner
	function spinner() {
		const amountSpinner = $('.spinner__input');
		const amountSpinnerUp = $('.spinner__button_up');
		const amountSpinnerDown = $('.spinner__button_down');

		amountSpinner.spinner({
			max: 50,
			min: 0,
			step: 1
		});

		amountSpinnerUp.click(function () {
			$(this).siblings('.ui-spinner').children('.spinner__input').spinner('stepUp');
		});

		amountSpinnerDown.click(function () {
			$(this).siblings('.ui-spinner').children('.spinner__input').spinner('stepDown');
		});

	}

	carouselOwl();
	spinner();



});
