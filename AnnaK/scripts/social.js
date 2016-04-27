$(document).ready(function(){

	//social links
	var $fb = $('.facebook');
	var $vk = $('.vk');
	var $gp = $('.google-plus');
	var $social = $('.social')

	var myUrl = 'http://annak.fashion/';

	$(document).click('.social', function(e){
		if ($(e.target).hasClass('facebook')) {
			share('http://www.facebook.com/sharer/sharer.php?u=', myUrl);
		} else if ($(e.target).hasClass('vk')){
			share('http://vkontakte.ru/share.php?url=', myUrl);
		} else if ($(e.target).hasClass('google-plus')){
			share('https://plus.google.com/share?url=', myUrl);
		}
	});

	function share(socialUrl, myUrl){
		var url = socialUrl + myUrl;
		window.open(
			url,
			'', 
			'width=626,height=436'); 
		return  false;
	}
});