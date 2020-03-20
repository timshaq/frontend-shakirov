$('.examples__album').slick({
		slidesToShow: 3,
		infinite: true,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1367,
				settings:
				{
					slidesToShow: 2,
			        infinite: true,
			        slidesToScroll: 1,
			        autoplay: false,
			        autoplaySpeed: 2000,
			        dots: false,
			        arrows: true
				}
			},
			{
				breakpoint: 1025,
				settings:
				{
					slidesToShow: 2,
			        infinite: true,
			        slidesToScroll: 1,
			        autoplay: false,
			        autoplaySpeed: 2000,
			        dots: true,
			        arrows: false
				}
			},
			{
				breakpoint: 998,
				settings:
				{
					slidesToShow: 1,
			        infinite: true,
			        slidesToScroll: 1,
			        autoplay: false,
			        autoplaySpeed: 2000,
			        dots: true,
			        arrows: false
				}
			}
		]
	})
