app.directive('payment', function(){
	return {
		templateUrl: 'templates/payment.html',
		controller: 'PaymentController',
		controllerAs: 'PaymentCtrl'
	};
});

app.controller('PaymentController', function($state){
	document.querySelector('.nav-item-cart').classList.remove('active');
	document.querySelector('.nav-item-payment').classList.add('active');
	this.goToInfo = function(){
		$state.go('info');
	}
});