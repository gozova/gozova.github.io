// -------------------------------------------------------------
// ===========================================
// Product Name : Silva — Beautiful App HTML Template
// Author: Kenul Jain
// Version : 1.0 (Initial Release)
// File Name : main.js
// ===========================================
// -------------------------------------------------------------

// -------------------------------------------------------------
// ===========================================
// 				Table of Contents
// ===========================================
// -------------------------------------------------------------

// 1. Custom Elements
// 	1.1 Detecting if JavaScript is enabled
// 	1.2 Detecting Viewport Height
// 	1.3 Enable In-Page Smooth Navigation
// 	1.4 Reponsive Navigation for Mobile
// 	1.5 Accordians (FAQ Section)
// 	1.6 Tabs (Advanced Features Section)
// 	1.7 AJAX Powered Mailchimp Subscription
// 	1.8 AJAX Powered Contact Form

// 2. Initiating Plugins and Customization
// 	2.1 FitText.min.js (For Reponsive Typography)
// 	2.2 jquery.sticky.js (For Sticky Header)
// 	2.3 Owl-carousel.min.js (For Carousel/Sliding effect)
// 	2.4 jquery.magnific-popup.min.js (For Lightbox Video Effect)
// 	2.5 jquery.magnific-popup.min.js (For Lightbox Gallery Effect)
// 	2.6 Google Maps API (For Styled Maps Section)


// Starting Anonymous Function

(function($) {

	"use strict";

	// -------------------------------------------------------------
	// ===========================================
	// 	1. Custom Elements
	// ===========================================
	// -------------------------------------------------------------

	// ===========================================
	// 	1.1 Detecting Viewport Height
	// ===========================================

	resizeDiv();

	window.onresize = function(event) {
		resizeDiv();
	}
	function resizeDiv() {
		var vpw = $(window).width();
		var vph = $(window).height();
		var $element = $('#auto-height');

		if(vpw < 768){
			$element.css({'height': '50em'});
			if($('.bg.login-page').length) {
				$element.css({'height': vph + 'px'});
			}
			if($('.bg.coming.type-3').length) {
				$element.css({'height': '80em'});
			}
		} else{
			$element.css({'height': vph + 'px'});
		}

	}

	// ===========================================
	// 	1.2 Enable In-Page Smooth Navigation
	// ===========================================

	$('a[href*=#]:not([href=#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1500);
				return false;
			}
		}
	});

	// ===========================================
	// 	1.3 Reponsive Navigation for Mobile
	// ===========================================

	var vpw = $(window).width();

	if( vpw < 768) {
		var navigation = {

			navElement: $('nav.main'),

			animate: {
				in: 'animated fadeInUp', // Change Animation Here - Incoming Animation
				out: 'animated fadeOutDown' // Change Animation Here - Outgoing Animation
			},

			init: function() {
				$('<span></span>', {
					html: '<i class="fa fa-navicon"></i>'
				})
					.addClass('col-xs-offset-7 col-xs-2 p-none nav-button')
					.insertBefore('nav.main')
					.on('click', this.show);
				navigation.navElement.addClass('animated fadeOutDown').css('display', 'none');
			},

			show: function() {
				var $this = $('span.nav-button');
				var nv = navigation,
				na = navigation.animate

				$this.hide();
				nv.navElement.removeClass(na.out).addClass(na.in).css('display', 'block');
				$('span.close-button').show();

				if ( $('#header').find('span.close-button').length ) return;

				$('<span></span>', {
					html: '<i class="fa fa-close"></i>'
				})
					.addClass('col-xs-offset-7 col-xs-2 p-none close-button')
					.insertBefore('nav.main')
					.on('click', navigation.close);
			},

			close: function() {
				var $this = $('span.close-button');
				var nv = navigation,
				na = navigation.animate

				$('span.nav-button').show();
				$this.hide();
				nv.navElement.removeClass(na.in).addClass(na.out).css('display', 'none');
			}

		}

		navigation.init();
	}

	// ===========================================
	// 	1.4 Accordians (FAQ Section)
	// ===========================================

	if($('dl.accordian').length) {

		$('dt.question').filter(':first-child').addClass('active');
		$('dd.answer').filter(':nth-child(2)').slideDown();

		$('dl.accordian').on('click', 'dt', function() {
			$(this).siblings().removeClass('active');
			$('dd.answer').slideUp();
			$(this).addClass('active').next().slideDown();
		})

	}

	// ===========================================
	// 	1.5 Tabs (Advanced Features Section)
	// ===========================================

	if($('.tabs').length) {

		$('.f-heading').first().addClass('active');
		$('.f-detail').first().fadeIn();

		$('.tabs').on('click', '[data-tab]', function () {
			$(this).addClass('active').siblings('[data-tab]').removeClass('active');
			$(document).find('[data-content=' + $(this).data('tab') + ']').fadeIn().siblings('[data-content]')
				.fadeOut();
		})

	}

	// ===========================================
	// 	1.6 AJAX Powered Mailchimp Subscription
	// ===========================================

	// For scope reasons and to prevent DOM errors the code has been moved here:
	// js/vendor/jquery.ajaxchimp.min.js 			<------|

	// ===========================================
	// 	1.7 AJAX Powered Contact Form
	// ===========================================

	if($('#contact').length) {

		$(".contact").submit(function (e) {
			e.preventDefault();
			var fname = $("#cf-fname").val();
			var lname = $("#cf-lname").val();
			var email = $("#cf-email").val();
			var subject = $("#cf-sub").val();
			var msg = $("#cf-message").val();
			var dataString = 'fname=' + fname + '&lname=' + lname + '&email=' + email + '&subject=' + subject + '&msg=' + msg;

			function isValidEmail(emailAddress) {
				var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
				return pattern.test(emailAddress);
			};
			if (isValidEmail(email) && (msg.length > 1) && (fname.length > 1) && (lname.length > 1)) {
				$.ajax({
					type: "POST",
					url: "contact.php",
					data: dataString,
					success: function () {
						$('.success').fadeIn(1000);
						$('.error').fadeOut(500);
					}
				});
			}
			else {
				$('.error').fadeIn(1000);
				$('.success').fadeOut(500);
			}
			return false;
		});

	}

	// -------------------------------------------------------------
	// ===========================================
	// 	2. Initiating Plugins and Customization
	// ===========================================
	// -------------------------------------------------------------

	// ===========================================
	// 	2.1 FitText.min.js (For Reponsive Typography)
	// ===========================================

	jQuery("body").fitText(10.5, { minFontSize: '13px', maxFontSize: '17px' });

	// ===========================================
	// 	2.2 jquery.sticky.js (For Sticky Header)
	// ===========================================

	if($("header.sticky").length) {
		$("header.sticky").sticky({topSpacing:0});
	}

	// ===========================================
	// 	2.3 Owl-carousel.min.js (For Carousel/Sliding effect)
	// ===========================================

	if($(".owl-carousel").length) {

		$(".owl-carousel").owlCarousel({
			nav : true, // Show next and prev buttons
			dots: false, // Hide paginations
			slideSpeed : 1000,
			paginationSpeed : 600,
			items: 1,
			navText:[
			 "<i class='pe-7s-angle-left'></i>",
			 "<i class='pe-7s-angle-right'></i>"
			]
		});

	}

	// ===========================================
	// 	2.4 jquery.magnific-popup.min.js (For Lightbox Video Effect)
	// ===========================================

	if($(".video-link").length) {
		$(".video-link").magnificPopup({type:'iframe'});
	}

	// ===========================================
	// 	2.5 jquery.magnific-popup.min.js (For Lightbox Gallery Effect)
	// ===========================================
	
	if($(".screenshots").length) {
		$(".screenshots").magnificPopup({

			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true
			}

		});
	}
	
	// ===========================================
	// 	2.6 Google Maps API (For Styled Maps Section)
	// ===========================================

	function initialize() {
		"use strict";
		var mapCanvas = document.getElementById('map-canvas');
		var mapOptions = {
			center: new google.maps.LatLng(17.3700, 78.4800),
			zoom: 8,
			styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
			scrollwheel: false
			}
		var map = new google.maps.Map(mapCanvas, mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(17.3700, 78.4800),
			map: map
		});
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);

})(jQuery);