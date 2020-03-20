$(function(){
	// Menu burger — start
	$('.navigation__img_menu-burger')
	.click(function(){
		$('.header__navigation-mobile').fadeIn().css({'display': 'flex'});
		$('.navigation__img_menu-burger').css({'display': 'none'});
		$('.navigation__img_menu-close').css({'display': 'block'});
		});
	$('.navigation__img_menu-close')
	.click(function(){
		$('.header__navigation-mobile').fadeOut();
		$('.navigation__img_menu-close').css({'display': 'none'});
		$('.navigation__img_menu-burger').css({'display': 'block'});
		});
	// Menu burger — end

	
})
	window.onresize = function() {
		if (window.innerWidth >= 1024) {
			$('.navigation__img_menu-burger').css({'display': 'none'});
			$('.navigation__img_menu-close').css({'display': 'none'});
			$('.header__navigation-mobile').css({'display': 'none'});
		} else {
			$('.navigation__img_menu-burger').css({'display': 'block'});
		}
	}