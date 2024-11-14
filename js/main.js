;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};


	// var offcanvasMenu = function() {

	// 	$('#page').prepend('<div id="fh5co-offcanvas" />');
	// 	$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
	// 	var clone1 = $('.menu-1 > ul').clone();
	// 	$('#fh5co-offcanvas').append(clone1);
	// 	var clone2 = $('.menu-2 > ul').clone();
	// 	$('#fh5co-offcanvas').append(clone2);

	// 	$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
	// 	$('#fh5co-offcanvas')
	// 		.find('li')
	// 		.removeClass('has-dropdown');

	// 	// Hover dropdown menu on mobile
	// 	$('.offcanvas-has-dropdown').mouseenter(function(){
	// 		var $this = $(this);

	// 		$this
	// 			.addClass('active')
	// 			.find('ul')
	// 			.slideDown(500, 'easeOutExpo');				
	// 	}).mouseleave(function(){

	// 		var $this = $(this);
	// 		$this
	// 			.removeClass('active')
	// 			.find('ul')
	// 			.slideUp(500, 'easeOutExpo');				
	// 	});


	// 	$(window).resize(function(){

	// 		if ( $('body').hasClass('offcanvas') ) {

    // 			$('body').removeClass('offcanvas');
    // 			$('.js-fh5co-nav-toggle').removeClass('active');
				
	//     	}
	// 	});
	// };


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		const animateBoxes = document.querySelectorAll('.animate-box');
		const cooldownTime = 300;

		const lastAnimationTimeMap = new Map();

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				const el = entry.target;
				const effect = el.getAttribute('data-animate-effect');
				const currentTime = Date.now();

				if (!lastAnimationTimeMap.has(el)) {
					lastAnimationTimeMap.set(el, 0);
				}
				const lastAnimationTime = lastAnimationTimeMap.get(el);

				const hasFadeIn = el.classList.contains('fadeIn') || 
								el.classList.contains('fadeInLeft') || 
								el.classList.contains('fadeInRight') || 
								el.classList.contains('fadeInUp');

				const hasFadeOut = el.classList.contains('fadeOut') || 
								el.classList.contains('fadeOutLeft') || 
								el.classList.contains('fadeOutRight') || 
								el.classList.contains('fadeOutUp');

				if (entry.isIntersecting && !hasFadeIn) {
					el.classList.remove('fadeOutLeft', 'fadeOutRight', 'fadeOutUp', 'fadeOut');
					
					if (effect === 'fadeIn') {
						el.classList.add('fadeIn', 'animated-fast');
					} else if (effect === 'fadeInLeft') {
						el.classList.add('fadeInLeft', 'animated-fast');
					} else if (effect === 'fadeInRight') {
						el.classList.add('fadeInRight', 'animated-fast');
					} else {
						el.classList.add('fadeInUp', 'animated-fast');
					}

					lastAnimationTimeMap.set(el, Date.now());
				} else if (!entry.isIntersecting && !hasFadeOut && entry.boundingClientRect.top > 0) {

					if (currentTime - lastAnimationTime >= cooldownTime) {
						el.classList.remove('fadeIn', 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'animated-fast');
						
						if (effect === 'fadeIn') {
							el.classList.add('fadeOut');
						} else if (effect === 'fadeInLeft') {
							el.classList.add('fadeOutLeft');
						} else if (effect === 'fadeInRight') {
							el.classList.add('fadeOutRight');
						} else {
							el.classList.add('fadeOutUp');
						}

						lastAnimationTimeMap.set(el, Date.now());
					}
				}
			});
		}, {
			threshold: 0.25,
			rootMargin: "0px 0px -150px 0px"
		});

		animateBoxes.forEach(box => observer.observe(box));
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var menuToggle = function() {
		$('.event-toggle a').click(function(event) {
			event.preventDefault();
			
			var target = $(this).attr("href");
			var targetOffset = $(target).offset().top;
	
			$('html, body').animate({
				scrollTop: targetOffset
			}, 600);
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.menu-toggle').addClass('active');
			} else {
				$('.menu-toggle').removeClass('active');
			}

		});
		$('#toggleGiftButton').on('click', function() {
			$('#gift-info').slideToggle(300);
			if ($('#gift-info').is(':visible')) {
				$(this).html('<i class="fa-solid fa-gift"></i> Kirim Hadiah');
			} else {
				$(this).html('<i class="fa-solid fa-gift"></i> Kirim Hadiah');
			}
		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		// offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		menuToggle()
		loaderPage();
		counter();
		counterWayPoint();
	});


}());