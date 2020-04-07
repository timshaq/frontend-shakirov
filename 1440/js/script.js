$(function() {
	window.onload = function() {
		console.log('loaded')


		var img = $('.img-responsive')
		img.on('click', function(ev) {
			console.log(getAngle(ev.target))
		})

		var btnRev = $('.btn-reverse');
		btnRev.on('click', function(ev) {
			var img = ev.originalEvent.path[2].children[0];
			curAng = getAngle(img);
			if (img.getAttribute('value') === '-1') {
				if (curAng === 180) {
					$(img).css("transform", `rotate(${0}deg) scale(1,1)`);
					img.setAttribute('value','1')
				} else if (curAng === 0) {
					$(img).css("transform", `rotate(${180}deg) scale(1,1)`);
					img.setAttribute('value','1')
					} else {
						curAng = (curAng*(-1))
						$(img).css("transform", `rotate(${curAng || 0}deg) scale(1,1)`);
						img.setAttribute('value','1')
					}
			} else if (img.getAttribute('value') === '1') {
				if (curAng === 0) {
					$(img).css("transform", `rotate(${0}deg) scale(-1,1)`);
					img.setAttribute('value','-1')
				} else {
					$(img).css("transform", `rotate(${curAng}deg) scale(-1,1)`);
					img.setAttribute('value','-1')
				}
			} else if (!img.getAttribute('value')) {
				$(img).css("transform", `rotate(${0}deg) scale(-1,1)`);
					img.setAttribute('value','-1')
			}
			
		})

		var btnLeft = $('.btn-rotate-left');
		btnLeft.on('click', function(ev) {
			var img = ev.originalEvent.path[2].children[0];
			curAng = getAngle(img);
			if (img.getAttribute('value')) {
				if (img.getAttribute('value') === '-1') {

					if (curAng === 180) {
						$(img).css("transform", `rotate(${-90}deg) scale(-1,1)`);
					} else if (curAng === 0) {
						$(img).css("transform", `rotate(${90}deg) scale(-1,1)`);
						} else {
							curAng = (curAng*(-1))
							$(img).css("transform", `rotate(${curAng-90}deg) scale(-1,1)`);
						}


				} else if (img.getAttribute('value') === '1') {

					if (curAng === 0) {
						$(img).css("transform", `rotate(${-90}deg) scale(1,1)`);
					} else {
						$(img).css("transform", `rotate(${curAng-90}deg) scale(1,1)`);
					}



				}
			} else {
				setAngle(curAng-90, img)
			}
			
		})

		var btnRight = $('.btn-rotate-right');
		btnRight.on('click', function(ev) {
			var img = ev.originalEvent.path[2].children[0];
			curAng = getAngle(img);
			if (img.getAttribute('value')) {
				if (img.getAttribute('value') === '-1') {

					if (curAng === 180) {
						$(img).css("transform", `rotate(${90}deg) scale(-1,1)`);
					} else if (curAng === 0) {
						$(img).css("transform", `rotate(${270}deg) scale(-1,1)`);
						} else {
							curAng = (curAng*(-1))
							$(img).css("transform", `rotate(${curAng+90}deg) scale(-1,1)`);
						}

				} else if (img.getAttribute('value') === '1') {

					if (curAng === 0) {
						$(img).css("transform", `rotate(${90}deg) scale(1,1)`);
					} else {
						$(img).css("transform", `rotate(${curAng+90}deg) scale(1,1)`);
					}
					
				}
			} else {
				setAngle(curAng+90, img)
			}
			
		})


		function setAngle(degrees, img) {
		  $(img).css("transform", "rotate(" + degrees + "deg)");
		}

		function getAngle(img) {
		  var transform = $(img).css("transform");
		  var matches = transform.match(/matrix\((.*?)\)/i);
		  if (matches == null) return null;
		  var values = matches[1].split(', ');
		  var a = values[0];
		  var b = values[1];
		  return Math.round(Math.atan2(b, a) * (180 / Math.PI));
		}

		$(window).on('scroll', function(ev) {
			console.log(window.scrollY)//(22200%/604)
			if (window.scrollY >= 222) {
				$('#fix-block').addClass('pos-fix');
			} else {
				$('#fix-block').removeClass('pos-fix');
			}
		})

	}
})