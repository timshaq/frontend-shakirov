$(function(){

	$(function() {
        $(".tel-mask").mask("+7 (999) 999-99-99");
    })

	function disableScroll(){
		var scrY = window.scrollY;
		console.log(scrY)
		// $('body').css({
		// 		'position': 'fixed',
		// 		'top': scrY,
		// 		'width': '100%',
 	// 			'height': '100%',
 	// 			'overflow': 'hidden'

		// 	})
		$('html').css('overflow', 'hidden');
	};

	function enableScroll(){
		// $('body').css({
		// 	'position': 'relative',
 	// 		'overflow': 'auto'
		// });
		$('html').css({'overflow-y': 'scroll', 'overflow-x': 'hidden'})
	};

	// More information — start
		// Узнать больше
	$(".about__button_action").click(function(){
		$(".inform-container").fadeIn(400, disableScroll)
		$(".inform-container").css({"display": "flex", 'overflow': 'auto'})

	});

	$('.inform-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('.informer__image').click(function(event){
		$(".inform-container").fadeOut(400, enableScroll);
	})
		// Узнать стоимость
	$(".my-skills__button_action").click(function(){
		$(".inform-container").fadeIn(400, disableScroll)
		$(".inform-container").css({"display": "flex", 'overflow': 'auto'})

	});

	$('.inform-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('.informer__image').click(function(event){
		$(".inform-container").fadeOut(400, enableScroll);
	})
	// More information — end

	// Call-me button — start
	$(".button_call").click(function(){
		$(".call-container").fadeIn(400, disableScroll)
		$(".call-container").css({"display": "flex", 'overflow': 'auto'})

	});

	$('.call-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('.caller__image').click(function(event){
		$(".call-container").fadeOut(400, enableScroll);
	})

	// Call-me img
	$("#small-call-me").click(function(){
		$(".call-container").fadeIn(400, disableScroll)
		$(".call-container").css({"display": "flex", 'overflow': 'auto'})

	});

	$('.call-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})
	// Call-me button — end

	// Order-project button — start
	$("#order-project").click(function(){
		$(".order-container").fadeIn(400, disableScroll)
		$(".order-container").css({"display": "flex", 'overflow': 'auto'})

	});

	$('.order-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('.orderer__image').click(function(event){
		$(".order-container").fadeOut(400, enableScroll);
	})
	// Order-project button — end
})


	$( document ).ready(function(){
	  $( ".informer__form" ).submit(function(){
	    var formData = $( this ).serialize(); // создаем переменную, которая содержит закодированный набор элементов формы в виде строки

	    $.post( "mail-inform.php", formData, function( data ) { //  передаем и загружаем данные с сервера с помощью HTTP запроса методом POST
	      alert('Ваша заявка отправлена!') // вставляем в элемент <div> данные, полученные от сервера
	    })
	  });

	  $( ".orderer__form" ).submit(function(){
	    var formData = $( this ).serialize(); // создаем переменную, которая содержит закодированный набор элементов формы в виде строки

	    $.post( "mail.php", formData, function( data ) { //  передаем и загружаем данные с сервера с помощью HTTP запроса методом POST
	      alert('Ваша заявка отправлена!') // вставляем в элемент <div> данные, полученные от сервера
	    })
	  });

	  $( ".caller__form" ).submit(function(){
	    var formData = $( this ).serialize(); // создаем переменную, которая содержит закодированный набор элементов формы в виде строки

	    $.post( "mail.php", formData, function( data ) { //  передаем и загружаем данные с сервера с помощью HTTP запроса методом POST
	      alert('Ваша заявка отправлена!') // вставляем в элемент <div> данные, полученные от сервера
	    })
	  });


	});
