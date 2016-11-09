(function () {
	'use strict';

	var mainCss = document.querySelector('main').style;
	var step = 1848;
	var slideButtons = document.querySelectorAll('.slide-nav li');

	var contNumber = document.querySelectorAll('.container').length;
	mainCss.width = step*contNumber + 'px';

	document.addEventListener('click', function(e){
		if (e.target.getAttribute('data-slide')){
			mainCss.marginLeft = -e.target.getAttribute('data-slide')  * step + 'px';
			for (var i = 0; i < slideButtons.length; i++) {
				slideButtons[i].classList.remove('current');
			}
			e.target.classList.add('current');
		}

		if(e.target.getAttribute('data-direction')){
			var current = document.querySelector('.slide-nav .current');
			if (e.target.getAttribute('data-direction') === 'prev' && current.previousElementSibling){
				current.previousElementSibling.click();
			} else if (e.target.getAttribute('data-direction') === 'next' && current.nextElementSibling){
				current.nextElementSibling.click();
			}
			

		}

	});
})();