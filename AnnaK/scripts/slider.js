$(document).ready(function(){

	//jquery objects
	var $window = $(window);
	var $slides = $('.slide');
	var $btnNext = $('.btn-next');
	var $btnPrev = $('.btn-prev');
	var $rbtn = $('.rbtn-slide');
	var $rbtnFirst = $rbtn.eq(0);

	//variables
	var begin = 0;
	var timer = (windowWidth>desktopWidth) ? setInterval(autoplay, 3500) : '';
	var windowWidth = $window.width();
	var desktopWidth = 1640;


	//event listeners

	//mobile
	$btnNext.on('click', function(e){
		$btnPrev.prop('disabled', false);
		slide(begin + 2, begin + 3);
		begin += 2;
		if (begin + 2 >= $slides.length){
			$btnNext.prop('disabled', true);
		}
	});

	$btnPrev.on('click', function(e){
		$btnNext.prop('disabled', false);
		slide(begin - 2, begin - 1);
		begin -= 2;
		if (begin <= 0){
			$btnPrev.prop('disabled', true);
		}
	});

	//desktop
	$rbtn.change(function(e){
		var begin = +$(e.target).attr('data-begin');
		slide(begin, begin + 4);
	});

	$('.collection').hover(function(){
		clearInterval(timer);
	}, function(){
		if (windowWidth>desktopWidth) {
			timer = setInterval(autoplay, 3500);
		}
		
	});

	//to handle changing media queries on window resize

	$(window).resize(function(e){
		var newWindowWidth = $window.width();
		if (windowWidth >= desktopWidth && newWindowWidth < desktopWidth) {
			setStyleMobile();
		}
		if (windowWidth <= desktopWidth && newWindowWidth > desktopWidth) {
			setStyleDesktop();
		}
		windowWidth = $window.width();
	});

	//our function for sliding
	function slide(begin, end){
		$slides.filter(':visible').fadeOut(500, function(){
				for(var i=begin; i<=end; i++){
					$slides.eq(i).fadeIn(500);
				}
		});
	}

	function autoplay() {
		var $next = $rbtn.filter(':checked').next().next();
		if ($next.length === 0){
			$next = $rbtnFirst;
		}
		$next.click();
	}


	//default syles for different versions
	function setStyleMobile(){
		$slides.hide();
		$('.slide-mobile').show();
		begin = 0;
		clearInterval(timer);
		$btnPrev.prop('disabled', true);
		$btnNext.prop('disabled', false);
		console.log('mob');
	}

	function setStyleDesktop(){
		$slides.hide();
		$('.slide-desktop').show();
		$rbtnFirst.click();
		timer = setInterval(autoplay, 3500);
	}
});