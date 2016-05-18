app.directive('info', function(){
	return {
		templateUrl: 'templates/info.html',
		controller: 'InfoController',
		controllerAs: 'InfoCtrl'
	};
});

app.controller('InfoController', function(){
	document.querySelector('.nav-item-payment').classList.remove('active');
	document.querySelector('.nav-item-info').classList.add('active');
});