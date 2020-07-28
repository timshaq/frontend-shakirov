$(function(){

	$(function() {
        $(".tel-mask").mask("+7 (999) 999-99-99");
    })

	function disableScroll () {
		$('html').css('overflow', 'hidden');
	};

	function enableScroll () {
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




	$( "#submit-informer" ).on('click',function(ev){
	      $().fadeOut(400, enableScroll);

	  });

	var formNodeList = document.querySelectorAll('form');
	var formList = Array.prototype.slice.call(formNodeList);

	function getSendResult (res) {
		console.log(res)
		if (res != 'ok') {
			alert('Ошибка отправки, попробуйте еще раз!')
		} else {
			alert('Ваша заявка отправлена!')
			$('.call-container .order-container .inform-container').fadeOut(400, enableScroll)
		}
	}

	formList.map(form => {
		form.addEventListener('submit', function(ev) {
			console.log('SUBMIT')
			ev.preventDefault()
			var sendBody = $(form).serialize()

			console.log('sendBody')
			console.log( sendBody )

		    fetch("mail.php", { 
		        method: "POST",
		        body: sendBody,   
		        headers:{"content-type": "application/x-www-form-urlencoded"} 
		      })
		    .then(res => {return res.text()})
		    .then(text => {getSendResult(text)})

		    

		})
		

	})


})