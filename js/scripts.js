(function ($) {
	'use strict';

	/*------------------
		Preloder
	--------------------*/
	$(window).on('load', function () {
		$('#preloader').delay(550).fadeOut('slow');
		$('body').delay(550).css({
			'overflow': 'visible'
		});
	});


	/*------------------
		Navigation
	--------------------*/
	$('.menu-list').onePageNav();
	$('.nav-switch').on('click', function (event) {
		$('.mainmenu').toggleClass('active');
		$(this).toggleClass('active');
		event.preventDefault();
	});

	//======= NAVBAR SMOOTH SCROLL========//
	$('.slow-scroll').on("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});



	$(".element").typed({
		strings: ["Magical Innovation Hub"],
		typeSpeed: 10,
		loop: true,
		backDelay: 2000
	});


	/*------------------
			PROGRESS BAR
		--------------------*/
	$('.progress-bar-style').each(function () {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});



	/*------------------
		MAGNIDIC POPUP
	--------------------*/
	$('.image-popup').magnificPopup({
		type: 'image',
		gallery: { enabled: true }
	});

	$('.video-popup').magnificPopup({
		type: 'iframe',
		autoplay: true
	});


	/*------------------
		Review Carousel
	--------------------*/
	$('#review-carousel').owlCarousel({
		dots: true,
		nav: false,
		loop: true,
		smartSpeed: 700,
		items: 1,
		autoplay: true
	});


	/*------------------
		Contact Form
	--------------------*/
	// $('#contact-form').on('submit', function () {
	// 	var send_btn = $('#send-form'),
	// 		form = $(this),
	// 		formdata = $(this).serialize(),
	// 		chack = $('#form-chack');
	// 	send_btn.text('Wait...');

	// 	function reset_form() {
	// 		$("#name").val('');
	// 		$("#email").val('');
	// 		$("#massage").val('');
	// 	}

	// 	$.ajax({
	// 		url: $(form).attr('action'),
	// 		type: 'POST',
	// 		data: formdata,
	// 		success: function (text) {
	// 			if (text == "success") {
	// 				send_btn.addClass('done');
	// 				send_btn.text('Success');
	// 				setTimeout(function () {
	// 					reset_form();
	// 					send_btn.removeClass('done');
	// 					send_btn.text('Send A Massage');
	// 				}, 5000);
	// 			}
	// 			else {
	// 				reset_form();
	// 				send_btn.addClass('error');
	// 				send_btn.text('Error');
	// 				setTimeout(function () {
	// 					send_btn.removeClass('error');
	// 					send_btn.text('Send A Massage');
	// 				}, 5000);
	// 			}
	// 		}
	// 	});
	// 	return false;
	// });







})(jQuery);