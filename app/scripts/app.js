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
			margin: 10,
			autoWidth: false,
			items: 3,
			loop: true,
			center: false,
			stagePadding: 0,
			dots: true,
			responsive: {
				320: {
					items: 2
				},
				768: {
					items: 2
				},
				1000:{
					items: 4
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
			$(this).spinner('stepUp');
		});

		amountSpinnerDown.click(function () {
			$(this).spinner('stepDown');
		});

	}

	carouselOwl();
	spinner();



});
